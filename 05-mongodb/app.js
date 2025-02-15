const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  console.log("working");
  res.send("working");
});

// // CRUD Operations in backend - MongoDB

// we are going to create user
app.get("/create", async (req, res) => {
  // asynchronous -- it will run later on
  let createdUser = await userModel.create({
    name: "abdul",
    username: "abdul00",
    email: "abdul@gmail.com",
  });

  res.send(createdUser);

  //   console.log("hi mongo"); // synchronous -- it will run first
});

// we are going to read user  - findOne() will give us null if no user found otherwise object of user, if there is more users with same name then only first will be show. find() will give us empty array if no user found otherwise array of users.
app.get("/read", async (req, res) => {
  //   let readUser = await userModel.find();
  let readUser = await userModel.findOne();

  res.send(readUser);
});

// we are going to update user
app.get("/edit", async (req, res) => {
  // userModel.findOneUpdate(findOne, update, {new: true})

  let updatedUser = await userModel.findOneAndUpdate(
    { username: "abdul00" },
    { username: "abdulkhan" },
    { new: true }
  );

  res.send(updatedUser);
});

// we are going to delete user
app.get("/delete", async (req, res) => {
  let deleteUser = await userModel.findOneAndDelete({ username: "abdul101" });
  res.send(deleteUser);
  console.log("user has been removed successfully!");
});

app.listen(3000);
