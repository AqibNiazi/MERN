const fs = require("fs");
const http=require('http')
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
const server=http.createServer((req,res)=>{
  res.end("Hello from node server")

})
server.listen(8080,'127.0.0.1',()=>{
  console.log("server listening requests on port :8080");
})
