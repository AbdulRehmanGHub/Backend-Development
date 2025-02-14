const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const path = require("path");

app.use(express.static(path.join(__dirname, `public`))); // using static public files

// console.log(__dirname);  // showing current path in which our index file is included. This is the same as the path.dirname() of the __filename
// console.log(__dirname + `/public`); // access the public folder
// console.log(path.join(__dirname, "public")); // access the public folder - another method

app.set("view engine", "ejs"); // setting up ejs

// app.get("/", (req, res) => {
//   res.send(`it's working`);
// });

app.get("/", (req, res) => {
  res.render(`app`); // filename in the views folder
});

// just add :(colon) where we want to make dynamic route
app.get("/user/:username", (req, res) => {
  // res.send(`user`);  // this will print "user" on every page starts with /user/---
  // res.send(req.params.username); // this will print the username for every user
  res.send(`Welcome ${req.params.username} to the website.`); // this will print text and the username for every user
});

// what if we want to add two params like name and age  ---   http://localhost:3000/profile/abdul/23
app.get("/profile/:name/:age", (req, res) => {
  // res.send(req.params); // to show in the form of json
  res.send(`Welcome ${req.params.name}. Your age is ${req.params.age}`);
});

app.listen(3000, () => {
  console.log("working");
});
