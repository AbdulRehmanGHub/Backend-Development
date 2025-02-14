const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  //   res.send("welcome to backend");
  // res.render("app");

  fs.readdir("./files", (err, files) => {
    // console.log(files); // readdir is used to locate files in directory, this will show our files in files folder
    res.render("app", { files: files }); // for showing dynamic files.
  });
});

app.post("/create", (req, res) => {
  // res.send("create jjj");
  // console.log(req.body);     // to check the form submitted data

  // now creating new file with every successful submit
  fs.writeFile(
    `./files/${req.body.task_title.split(" ").join("")}.txt`,
    req.body.task_details,
    (err) => {
      res.redirect("/");
    }
  ); // i have set the filename to the title name and remove the spaces between.
});

app.get("/file/:filename", (req, res) => {
  fs.readFile(`./files/${req.params.filename}`, "utf-8", (err, filedata) => {
    // console.log(fileData);
    res.render(`show`, {
      filename: req.params.filename,
      filedata: filedata,
    });
  });
});

app.get("/edit/:filename", (req, res) => {
  res.render(`edit`, { filename: req.params.filename });
});

app.post("/edit", (req, res) => {
  // console.log(req.body);
  fs.rename(
    `./files/${req.body.previousname}`,
    `./files/${req.body.newname}`,
    (err) => {
      res.redirect("/");
    }
  );
});

app.listen(3000);
