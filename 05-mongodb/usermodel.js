const mongoose = require("mongoose");
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
});

// we need model to perform CRUD Operations
module.exports = mongoose.model("user", userSchema);
