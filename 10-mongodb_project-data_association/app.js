const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userModel = require("./models/user");
const postModel = require("./models/post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// multer part
const multer = require("multer");
const crypto = require("crypto");
const path = require("path");
// -------------

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// // multer part - random name gen
// crypto.randomBytes(12, (err, bytes) => {
//   console.log(bytes.toString("hex"));
// });

// // multer - file storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/images/uploads");
  },
  filename: function (req, file, cb) {
    crypto.randomBytes(12, (err, bytes) => {
      const fn = bytes.toString("hex") + path.extname(file.originalname);
      cb(null, fn);
    });
  },
});

const upload = multer({ storage: storage });

// // ------------

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/test", (req, res) => {
  res.render("test");
});

app.post("/upload", upload.single("image"), (req, res) => {
  console.log(req.file);
});

app.get("/profile", isLoggedIn, async (req, res) => {
  //   console.log(req.user);
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate({ path: "posts" });

  res.render("profile", { user });
});

app.get("/like/:id", isLoggedIn, async (req, res) => {
  let blog = await postModel.findOne({ _id: req.params.id }).populate("user");

  if (blog.likes.indexOf(req.user.userid) === -1) {
    blog.likes.push(req.user.userid);
  } else {
    blog.likes.splice(blog.likes.indexOf(req.user.userid), 1);
  }
  await blog.save();
  res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let blog = await postModel.findOne({ _id: req.params.id }).populate("user");

  res.render("edit", { blog, user });
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
  let blog = await postModel.findOneAndUpdate(
    { _id: req.params.id },
    { content: req.body.content }
  );

  res.redirect("/profile");
});

app.post("/blog", isLoggedIn, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  let { content } = req.body;

  let blog = await postModel.create({
    user: user._id,
    content,
  });

  user.posts.push(blog._id);
  await user.save();
  res.redirect("/profile");
});

app.post("/register", async (req, res) => {
  let { name, username, email, password, age } = req.body;
  let user = await userModel.findOne({ email });

  if (user) {
    return response.status(500).send("User already registered!");
  }

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let user = await userModel.create({
        name,
        username,
        email,
        password: hash,
        age,
      });

      let token = jwt.sign({ email: email, userid: user._id }, "secretkey");
      res.cookie("token", token);
      res.send("user registered successfully");
    });
  });
});

app.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userModel.findOne({ email });

  if (!user) return res.send("Something went wrong!");

  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      let token = jwt.sign({ email: email, userid: user._id }, "secretkey");
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    } else res.redirect("/login");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

// middleware concept - protected route
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") res.redirect("/login");
  else {
    let data = jwt.verify(req.cookies.token, "secretkey");
    req.user = data;
  }
  next();
}

app.listen(3000);
