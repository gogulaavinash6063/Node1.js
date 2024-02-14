//------------------------------------------------task1------------------------------------------------
// const express = require("express");
// const app = express();
// var c=require("fs")
// const persons = 
//   { 
//     username: "kalyan",
//   password:"avinash",
//   dob:16
//  }
// app.get("/avi", (req, res) => {
// c.writeFile("./index.json",JSON.stringify(persons),(err,data)=>{
//   if(err){
//     res.send("error")
//   }
//   else{
//     res.send("success")
//   }
// })
// });
// app.listen(3000, () => {
//   console.log("hi");
// });


//------------------------------------------------------task2------------------------------------------------

const express = require("express");
const app = express();

const persons = {
  "obj1": { "name": "sharth", "age": 20 },
  "obj2": { "name": "avinash", "age": 22 }
};

//app.use(express.json());

app.post("/avi", (req, res) => {
  const age = persons.obj1.age + persons.obj2.age;
  res.json(age);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});



