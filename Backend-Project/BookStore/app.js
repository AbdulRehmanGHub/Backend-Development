const express = require("express");
const app = express();
const mongoose = require("mongoose");
const book = require("./models/book");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

const Mongo_URL = "mongodb://127.0.0.1:27017/bookstore";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(Mongo_URL);
}

// // home route
app.get("/", (req, res) => {
  res.send("hello welcome to backend");
});

// // books route
app.get("/books", async (req, res) => {
  const allBooks = await book.find({});
  res.render("./books/index.ejs", { allBooks });
});

// // show book route
app.get("/book/:id", async (req, res) => {
  let { id } = req.params;
  const aBook = await book.findById(id);
  res.render("./books/show.ejs", { aBook });
});

// // new book route
app.get("/new", (req, res) => {
  res.render("./books/new.ejs");
});

app.post("/books", async (req, res) => {
  // let {title, description, image, author, language, price} = req.body;  // already classified in new.ejs file
  //   let book = req.body.book;
  //   console.log(book);

  const newBook = new book(req.body.book);
  await newBook.save();
  res.redirect("/books");
});

// // testlising route
// app.get("/testlisting", async (req, res) => {
//   let samplelisting = new listing({
//     title: "my new book",
//     description: "my book description",
//     author: "author name here",
//     langauge: "book language",
//     price: 1200,
//   });

//   await samplelisting.save();
//   console.log("sample is saved!");
//   res.send("successfull testing");
// });

app.listen(3000, () => {
  console.log("app is working on port: 3000");
});
