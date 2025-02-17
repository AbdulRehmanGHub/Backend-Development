const express = require("express");
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");

app.get("/", (req, res) => {
  res.send("working");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    username: "abdul",
    email: "abdul@gmail.com",
    age: 24,
  });

  res.send(user);
});

app.get("/post/create", async (req, res) => {
  let post = await postModel.create({
    postdata: "this is post number 1",
    user: "67b2195c33e18e00138a7da5",
  });

  let user = await userModel.findOne({ _id: "67b2195c33e18e00138a7da5" });
  user.posts.push(post._id);
  await user.save();
  res.send({ post, user });
});

app.listen(3000);
