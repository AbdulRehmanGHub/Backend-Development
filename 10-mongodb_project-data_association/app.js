const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const userModel = require("./models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/profile", isLoggedIn, (req, res) => {
  //   console.log(req.user);
  res.render("profile");
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
      res.status(200).send("You can login");
    } else res.redirect("/login");
  });
});

app.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

// middleware concept - protected route
function isLoggedIn(req, res, next) {
  if (req.cookies.token === "") res.send("You must be logged in!");
  else {
    let data = jwt.verify(req.cookies.token, "secretkey");
    req.user = data;
  }
  next();
}

app.listen(3000);
