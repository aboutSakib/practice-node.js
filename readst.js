const http = require("http");
const fs = require("fs");
const { log } = require("console");

const server = http.createServer((req, res) => {
  const myReadstrem = fs.createReadStream(`${__dirname}/bigdata.txt`, "utf-8");
  myReadstrem.pipe(res);
});
server.listen(3000);
console.log("your servern is runing,,3000");
// const fs = require("fs");

// const ourReadstrem = fs.createReadStream(`${__dirname}/bigdata.txt`);

// const ourWritestrem = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadstrem.on("data", (chunk) => {
//   ourWritestrem.write(chunk);
// });

// using pipe
// ourReadstrem.pipe(ourWritestrem);
