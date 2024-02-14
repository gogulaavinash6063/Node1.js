
//---------------------------------task:1--------------------------------


// const express = require("express");
// const app = express();
// app.use(express.json());
// const  {LocalStorage} = require('node-localstorage')
// const localStorage = new LocalStorage('./local_storage');
// const user={
//     name:"aviansh",
//     password:"shashi"
// }
// app.get("/", (req, res) => {
//     localStorage.setItem("value",JSON.stringify(user));
//     const storedValue = localStorage.getItem("value");
//     res.send({storedValue});
// });
// app.listen(3020, () => {
//     console.log("Server is running on port 3020");
// });


//-----------------------------------------------task:2-------------------------------------
//const express=require("express");
// const app=express()
// app.use(express.json());
// const LocalStorage=require("node-localstorage").LocalStorage
// const localstorage = new LocalStorage('./local_storage');
//  app.post("/register",(req,res)=>{
//          localstorage.setItem("task2",JSON.stringify(req.body));
//     const stored=localstorage.getItem("task2")
//     res.send({stored})
//  })
//  app.listen(3020,()=>{
//      console.log("server running")
//  })

//---------------------------------------------task:3--------------------------------------






// const express=require("express");
// const app=express()
// app.use(express.json());
// const LocalStorage=require("node-localstorage").LocalStorage

// const localstorage = new LocalStorage('./local_storage');


// app.post("/register",(req,res)=>{

//     const data=JSON.parse(localstorage.getItem("task2"))
//     const {firstname,lastname}=req.body
//     const validation=data.find((val)=>val.firstname===firstname && val.lastname===lastname)

//     if(validation){
//         res.send("user already existed")
//     }else{
//     data.push(req.body)
    
//     localstorage.setItem("task2",JSON.stringify(data))
//     res.send("registration succesfull")
//     }
// })
// app.listen(3000,()=>{
//         console.log("server running")
//     })
   

















//--------------------------------------------task:3-------------------------------------

// const express=require("express")
// const app=express()
// app.use(express.json())
// let con=require("./db.js")
//    app.use(express.json())
//    app.post("/",(req,res)=>{
//     const {username,lastname}=req.body
//     const data="insert into shashi (username,lastname) values (?,?)"
//     con.query(data,[username,lastname],(err,data)=>{
//      const validation=data.find((val)=>val.username==username && val.lastname==lastname)
//      if(validation){
//         res.send("already user exits")
//      }
//      else{
//        res.send(data)
//         }
//      })
//     })
// app.listen(3020,()=>{
//     console.log("server running")
// })

//-----------------------------------------------task 4---------------------------------------------

// const express = require("express");
// const app = express();
// const {LocalStorage} = require("node-localstorage")
// app.use(express.json());
// const localstorage = new LocalStorage('./localfile');

// app.post("/register", (req, res) => {
//     const data = JSON.parse(localstorage.getItem("task22"))
//     const { firstname, lastname } = req.body;
//     const valid = data.find((val)=>val.firstname=== firstname && val.lastname===lastname);

//     if (valid) {
//         res.send("User already exists");
//     } else {
//         data.push(req.body);
//         localstorage.setItem("task22",JSON.stringify(data));
//         res.send("Registration successful");
//     }
// });
// app.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

//--------------------------------------task5-----------------------------------------------------
let express=require("express")
let app=express()
let con=require("./task4sql.js")
app.use(express.json())

app.post("/register",(req,res)=>{
const {username,password,email}=req.body
    con.query("create database latha",(err,data)=>{
        console.log(data);
        console.log("database is created")
    })
    con.query("use latha",(err)=>{
        console.log(err);
        console.log("latha database is using");
    })
    con.query("create table student(username varchar(50), password varchar(50) , email varchar(40))",(err,data)=>{
        console.log(data);
        console.log("table is created")
    })
    const insertQuery = "INSERT INTO student (username,password,email) VALUES (?, ?, ?)";
    con.query(insertQuery,[username,password,email],(err,data)=>{
        if (err) {
            console.error('Error registering user:', err);
            res.status(500).send("Error registering user");
          } else {
            console.log("User registered successfully");
            res.status(200).send(data);
          }
    })
})
app.post("/login",(req,res)=>{
    const {username,password,email}=req.body
    const selectQuery = "SELECT * FROM student WHERE username=? AND password=? AND email=?";
    con.query(selectQuery, [username,password,email], (err, result) => {
      if (err) {
        console.error('Error logging in:', err);
        res.status(500).send("Error logging in");
      } else {
        if (result.length > 0) {
          res.status(200).send("Login successful");
        } else {
          res.status(401).send("Invalid name or contact");
        }
    }
})
})
app.get("/users",(req,res)=>{
    const selectAllQuery = "SELECT * FROM student";
    con.query(selectAllQuery,(err,data)=>{
      if (err) {
        console.error('Error fetching users:', err);
        res.status(500).send("Error fetching users");
      } else {
        res.status(200).json(data);
      }
    });
}).listen(3000,()=>{
    console.log("port is running");
})                                