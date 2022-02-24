const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  res.end("<h1>Hello World</h1>");
});

// lesson 7, 7

server.listen(3000, () => {
    console.log("Server running on port 3000");
})
