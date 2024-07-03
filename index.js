const http = require("http");
const fs = require("fs");

http.createServer(() => {}).listen(5000);

// fs.writeFile("helloo.txt", "ishan shrestha ho ma", () => {});
// fs.readFile("hello.txt", "utf8", (error, data) => {
//   console.log(data);
// });

fs.writeFile("hello.txt", "manoj chor", () => {});
