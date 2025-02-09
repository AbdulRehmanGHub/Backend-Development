// const fs = require('node:fs');   // fs = File system
const fs = require("fs"); // we can use it too

// console.log(fs);

// // File System - Options

// // fs.writeFile - to create a new file with data
// // fs.writeFile(file, data[, options], callback)

// fs.writeFile("newfile.txt", "new data", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("created file with some data");
//   }
// });

// // fs.appendFile - to add more text/data in the previous file, syntax is same as writeFile.
// // fs.appendFile(file, data[, options], callback)

// fs.appendFile(
//   "index.html",
//   `<html> <head> <title>Backend Dev</title> </head> <body></body> </html>`,
//   (err) => {
//     if (err) {
//       console.log(err.message);
//     } else {
//       console.log("more data appended");
//     }
//   }
// );

// // fs.rename - to rename / change the file name.
// // fs.rename(oldPath, newPath, callback)

// fs.rename("./newfile.txt", "./file.txt", (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("file is renamed");
//   }
// });

// // fs.unlink - to remove the file
// // fs.unlink(path, callback)

// fs.unlink("./demoFile.js", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file is deleted successfully!");
//   }
// });

// fs.rmdir - to remove the directory | if the folder is empty it will remove otherwise we need to use recursive = true, which will forcefully delete our folder included all files in the foler.
// fs.rmdir(path, callback)

// // empty folder will be deleted.
// fs.rmdir("./demo", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder is deleted successfully!");
//   }
// });

// // folder included files will be deleted.
// fs.rmdir("./demo", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder is deleted successfully!");
//   }
// });

// // the fs.rmdir with recursive is deprecated, so instead of using rmdir method, we should use rm method. This will exactly work as rmdir.

// // fs.rm(path[, options], callback) - to remove folder.

// // folder included files will be deleted.
// fs.rm("./demoo", { recursive: true }, (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder is deleted including files successfully!");
//   }
// });

// // to copy a file into another folder/destination with other name but same data.
// // fs.copyFile(src, dest[, mode], callback)

// fs.copyFile("./file.txt", `./newfold/nFile.txt`, (err) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("file is copied successfully!");
//   }
// });

// // to read the data from the file
// // fs.readFile(path[, options], callback)

// if file formatting is not provided like utf8 or other, then by default the data will be shown in the form of buffer. So, must provide the formatting of data.

// fs.readFile("./file.txt", "utf8", (err, data) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log("data: ", data);
//   }
// });
