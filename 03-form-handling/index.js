const express = require("express");
const app = express();

// // we have only written these two lines here new
app.use(express.json()); // our data go to server and comeback in the form of stream(mixed unstructed format / not directly readable) and we need to make it readable with this line.
app.use(express.urlencoded({ extended: true })); // it works the same, but when we work with the form, ejs files etc. So it will make our data more readable

// // this is all prev code
app.get(`/`, (req, res) => {
  res.send("hello expressjs");
});

app.get(`/contact`, (req, res) => {
  res.send("this is contact page");
});

app.get("/profile", (req, res, next) => {
  return next(new Error("Not implemented"));
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke / went wrong!");
  return next(new Error("Not implemented"));
});

app.listen(3000);
