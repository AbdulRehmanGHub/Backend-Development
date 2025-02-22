const mongoose = require("mongoose");
const initData = require("./data.js");
const book = require("../models/book.js");

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

const intiDB = async () => {
  await book.deleteMany({});
  await book.insertMany(initData.data);
  console.log("data was initialized");
};

intiDB();
