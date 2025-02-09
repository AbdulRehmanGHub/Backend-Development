const express = require("express");
const app = express(); // assigned everything of express to app. Now we can use app anywhere

// creating route
app.get("/", (req, res) => {
  res.send("Hello ExpressJS");
});

// creating route - we can create as many route as we want
// app.get("/about", (req, res) => {
//     res.send("This is abt page.");
//   });

app.listen(3000);
