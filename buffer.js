const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form</title> </head>");
    res.write(
      "<body><form method='post' action='/process'> <input name='message'> </input></form></body>"
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("strem finished.....");
      const parsebody = Buffer.concat(body).toString();
      console.log(parsebody);
      res.write("thank you  processing ,,,,,,");
      res.end();
    });
  } else {
    res.write("page not found");
    res.end();
  }
});

server.listen(3000);
console.log("listing on port 3000");
