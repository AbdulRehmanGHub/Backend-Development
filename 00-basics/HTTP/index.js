const http = require(`http`);
// console.log(http);

// // To create a local server
// // http.createServer([options][, requestListener])

const server = http.createServer((req, res) => {
  res.end("The server is started successfully, node js!");
});

server.listen(3000);        // server will run on localhost:3000
