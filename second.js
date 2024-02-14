// var a=require("http")
// var b=require("url") 
// // console.log(a)
// a.createServer((req,res)=>{
//     res.write(JSON.stringify({"hell":"hello"}))
//     res.end()
// }).listen(3031,()=>{
//     console.log("hii")
// })

//-----------------------------------------different routing using url method-----------------------------
// var a=require("http")
// var b=require("url")
// a.createServer((req,res)=>{
//     let bb=b.parse(req.url,true)
//     if(bb.pathname=="/red"){
//         console.log(req.url)
//     console.log(bb)
//     res.write("hi avinash")
//     res.end()
//     }
//     let dd=b.parse(req.url,true)
//     if(dd.pathname=="/green"){
//         console.log(req.url)
//     console.log(bb)
//     res.write("hi kalyan")
//     res.end()
//     }
//     let cc=b.parse(req.url,true)
//     if(cc.pathname=="/orange"){
//         console.log(req.url)
//     console.log(bb)
//     res.write("hi pavan")
//     res.end()
//     }
//     else{
//         res.write("wrong")
//         res.end()
//     }
// }).listen(3002,()=>{
//     console.log("hi avinash welcome")
// })
//-----------------------------req.method--------------
// var a=require("http")
// var b=require("url")
// a.createServer((req,res)=>{
//     let bb=b.parse(req.url,true)
//     if(bb.pathname=="/register" && req.method=="GET"){
//         res.write("hello")
//         res.end()
//     }
//     else{
//         res.write("wrong")
//         res.end()
//     }
// }).listen(3002,()=>{
//     console.log("hi")
// })
//-------------------------------file system module------------------
//------------------1.read a file
// var a=require("http")
// var b=require("url")
// var c=require("fs")
// a.createServer((req,res)=>{
//     c.readFile("./first.js",(err,data)=>{
//         res.write(data)
//         res.end()
//     })
// }).listen(3002,()=>{
//     console.log("hi")
// })
//--------------------------2.create a file
//----------------------------------appendFile()
// var a=require("http")
// var b=require("url")
// var c=require("fs")
// a.createServer((req,res)=>{
//     let bb=b.parse(req.url,true)
//      if(bb.pathname=="/register" && req.method=="GET"){
//         c.appendFile("./index.html","hello",(err,data)=>{
//             if(err){
//                 res.write("wrong")
//                 res.end()
//             }
//             else{
//                 res.write("file is update")
//                 res.end()
//             }
//         })
//     }
// }).listen(3002,()=>{
//     console.log("hi")
// })
//---------------------------------writeFile()
// var a=require("http")
// var b=require("url")
// var c=require("fs")
// a.createServer((req,res)=>{
//     let bb=b.parse(req.url,true)
//      if(bb.pathname=="/register" && req.method=="GET"){
//         c.writeFile("./index.txt","hello macha",(err,data)=>{
//             if(err){
//                 res.write("wrong")
//                 res.end()
//             }
//             else{
//                 res.write("file is update")
//                 res.end()
//             }
//         })
//     }
// }).listen(3002,()=>{
//     console.log("hi")
// })
//--------------------------------delete file unlink()
// var a=require("http")
// var b=require("url")
// var c=require("fs")
// a.createServer((req,res)=>{
//     let bb=b.parse(req.url,true)
//      if(bb.pathname=="/register" && req.method=="GET"){
//         c.unlink("./index.txt",(err,data)=>{
//             if(err){
//                 res.write("wrong")
//                 res.end()
//             }
//             else{
//                 res.write("file is update")
//                 res.end()
//             }
//         })
//     }
// }).listen(3002,()=>{
//     console.log("hi")
// })
//--------------------------------------rename file rename()
// var a=require("http")
// var b=require("url")
// var c=require("fs")
// a.createServer((req,res)=>{
//     let bb=b.parse(req.url,true)
//      if(bb.pathname=="/register" && req.method=="GET"){
//         c.rename("./index.html","index1.html",(err,data)=>{
//             if(err){
//                 res.write("wrong")
//                 res.end()
//             }
//             else{
//                 res.write("file is update")
//                 res.end()
//             }
//         })
//     }
// }).listen(3002,()=>{
//     console.log("hi")
// })  
//----------------------------------------------routing using express--------------------------
// let express=require("express")
// let app=express()
// app.get("/hyderabad",(req,res)=>{
//     res.send("hello,welcome to hyderabad")
// })
// app.post("/",(req,res)=>{
//     res.send("hello,welcome to kukatpally")
// })

// app.listen(3002,()=>{
//     console.log("hi")
// }) 
//-----------------------------middleware
// let express=require("express")
// let fs=require("fs")
// let app=express()
// var register=[] 
// app.use(express.json())
// app.get("/hyderabad",(req,res)=>{
//     fs.readFile("index1.html",(err,data)=>{
//         //res.json("stored succefully")
//         console.log(req.body)
//         res.json(JSON.parse(data))
//         })
      
// })
// app.post("/",(req,res)=>{
//     register.push(req.body)
//     fs.writeFile("index.json",JSON.stringify(register),(err)=>{
//     res.json("stored succefully")
//     })
// })

// app.listen(3010,()=>{
//     console.log("hi")
// })  
// ---------------------
// const express = require('express');
// const app = express();

// const users = [
//     { id: 1, name: 'avinash' },
//     { id: 2, name: 'kalyan' },
//     { id: 3, name: 'rakhi' }
// ];

// app.get('/users', (req, res) => {
//     res.send(users);
// });

// app.listen(3000, () => {
//     console.log('Server started on port 3000');
// });
//------------------------------query params
// var a=require("http")
// var b=require("url")
// a.createServer((req,res)=>{
//     let bb=b.parse(req.url,true)
//     const{name, avinash}=bb.query
//     console.log(name, avinash);
//      if(bb.pathname=="/register" && req.method=="GET"){
//         res.write("hello 10k team")
//         res.end()
//     }
//     else if(bb.pathname=="/register" && req.method=="post"){
//         res.write("hello 10k")
//         res.end()

//     }
//     else{
//         res.write("wrong")
//         res.end()
//     }
// }).listen(3002,()=>{
//     console.log("hi")
// })  
//------------------------------------chunks
// var a=require("http")
// var b=require("url")
// var c=require("fs")
// a.createServer((req,res)=>{
//     let bb=b.parse(req.url,true)
//     console.log(bb.query)
//     //const{name, avinash}=bb.query
//     //console.log(name, avinash);
//      if(bb.pathname=="/register" && req.method=="GET"){
//         res.write("hello 10k team")
//         res.end()
//     }
//     else if(bb.pathname=="/pppp" && req.method=="POST"){
//         var body="aa"
//         req.on('data',(chunk)=>{
//             body+=chunk.tostring();
//         })
//         req.on('end',()=>{
//             console.log(body)
//             c.writeFile("index1.html",body,(err)=>{
//                 console.log(err);
//                 res.write("hello")
//                 res.end()
//             })
//         })
//         // res.write("hello 10k")
//         // res.end()

//     }
//     else{
//         res.write("wrong")
//         res.end()
//     }
// }).listen(3009,()=>{
//     console.log("hi")
// })  
// //-------------------------------------------------------
