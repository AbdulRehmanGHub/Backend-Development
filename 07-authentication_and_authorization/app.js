const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser()); // to use cookie parser

// // Bcrypt
const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

// // ----------------- Cookies ---------------------

// app.get("/", (req, res) => {
//   res.cookie("name", "abdul reh"); // by writing this line we can actually add cookie
//   res.send("working!");
// });

// // now, the cookie will remain active on all pages/routes of this project
// app.get("/read", (req, res) => {
//   console.log(req.cookies); // we can now read/see our cookie.
//   res.send("this is read page!");
// });

// // ----------------- Bcrypt --------------------

// app.get("/", (req, res) => {
//   // we can get these all lines from npm website (bcrypt)
//   bcrypt.genSalt(10, function (err, salt) {
//     // console.log(salt);
//     bcrypt.hash("this is myPassword", salt, function (err, hash) {
//       console.log(hash); // hash will actually generate us a long hash password from our password and this process is called encryption.
//     });
//   });

// // now we will se the decryption/comparison process of our password. In encyption, the password is actually converted to some random mixed long format. now we will see that whether our normal password is equal to the same long format or not. Let's see
//   bcrypt.compare(
//     "this is myPassword",
//     "$2b$10$7X2Wyi7x55CeDwlOBjI/5e7vDPVY2CpZKZgxthJH0h69qdIrJ7OP.",
//     function (err, result) {
//       console.log(result); // if the hash is same as it generated before with the same password then the result will be true otherwise false.
//     }
//   );
// });

// // -------------- JSON Web Tokens (JWT) ----------------

app.get("/", (req, res) => {
  // email is unique to everyone, generally we pass email here. Also in the next part after comma, "secret" is most important thing and we usually not want anyone to see this. This time i have write "secret" here but we store our unique password, so no one can decrypt it.
  let token = jwt.sign({ email: "abdul@gmail.com" }, "secret");
  console.log(token); // we will get a token in the form of long format like more than 100 chars.

  res.cookie("token", token); // we can store our token in the cookie as well now

  res.send("working");
});

app.get("/read", (req, res) => {
  //   console.log(req.cookies);

  let data = jwt.verify(req.cookies.token, "secret");
  console.log(data); // // this will again gives us our email based on the token we have provided to it. So we can see how easily JWT handle this situations of encryption and decryption. We can easily generate tokens and then verify through JWT as well.

  res.send("read page");
});

app.listen(3000);
