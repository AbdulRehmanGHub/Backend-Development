const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default:
      "https://media1.thehungryjpeg.com/thumbs2/ori_3483795_dfe015d7ef50179be53dc30114c6bf7ddd4c57c3_white-blank-book-cover-vector-template.jpg",
    set: (img) =>
      img === ""
        ? "https://media1.thehungryjpeg.com/thumbs2/ori_3483795_dfe015d7ef50179be53dc30114c6bf7ddd4c57c3_white-blank-book-cover-vector-template.jpg"
        : img,
  },
  author: String,
  language: String,
  price: Number,
});

const book = mongoose.model("book", bookSchema);
module.exports = book;
