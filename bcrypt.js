var express=require("express")
var bcrypt=require("bcrypt")
var app=express()
// var saltRounds=0;
app.get("/",(req,res)=>{
const plain={password:"avinashshashikusuma"}

const pass=bcrypt.hash(plain.password,0,(err,hash)=>{
    if(err){
        res.send("error")
    }
    else{
        res.json(hash)
    }
})
})
app.listen(3000,()=>{
    console.log("hi")
})