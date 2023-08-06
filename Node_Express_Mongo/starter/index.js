const fs = require("fs");
const http = require("http");
const { json } = require("node:stream/consumers");
const url = require("url");
// //Blocking,synchronous way
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// const textout = `This is what we know about Avacado : ${textIn}`;
// fs.writeFileSync("./txt/output.txt", textout);
// console.log("file written");
//Non-Blocking,Asynchronous way
// fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
//   if (err) return console.log("ERROR!");
//   fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);
//       fs.writeFile("./txt/final.txt", `${data2}\n${data3}`, "utf-8", (err) => {
//         console.log("your files have been written");
//       });
//     });
//   });
// });
// console.log("will read file!");

// Setting up a server
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8");
const dataObject = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is overview");
  } else if (pathName === "/product") {
    res.end("this is product");
  } else if (pathName === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });

    res.end(data);
  } else {
    res.writeHead(404, {
      contentType: "text/html",
    });
    res.end("<h1>Page Not Found!</h1>");
  }
});
server.listen(8080, "127.0.0.1", () => {
  console.log("server listening requests on port :8080");
});
