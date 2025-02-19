const multer = require("multer");
const path = require("path");
const crypto = require("crypto");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images/uploads"));
  },
  filename: function (req, file, cb) {
    const randomName = crypto.randomBytes(12).toString("hex");
    const ext = path.extname(file.originalname);
    cb(null, randomName + ext);
  },
});

const upload = multer({ storage: storage });
module.exports = upload;
