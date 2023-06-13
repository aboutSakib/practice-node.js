const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hi programmer how are you !!");
    res.end();
  } else if (req.url === "/about") {
    res.write("this is about page,,,,,");
    res.end();
  } else {
    res.write("page not found");
    res.end();
  }
});

server.listen(3000);
console.log("listing on port 3000");
