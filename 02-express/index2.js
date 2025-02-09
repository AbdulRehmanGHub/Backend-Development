// // middleware - there is a concept of middleware and Middleware is a middle part between the req and res. First our req will go to middleware where we want to do some changes if we want and then go to route and from there the response comes to us again.

// // Middleware will provide the information that req/res comes from which server, or it is running properly or not. etc etc.

const express = require("express");
const app = express(); // assigned everything of express to app. Now we can use app anywhere

// // middleware part -- first it will run before going to next to the route like /, or /about etc
app.use((req, res, next) => {
  console.log("middleware");
  next();
});

// // we can create middleware as many as we want

// // creating route
app.get("/", (req, res, next) => {
  res.send("Middleware work");
  next();
});

// // Error handling -- this should be in the last.
// // if there will be any issue this will run for error handling / showing
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.listen(3000);
