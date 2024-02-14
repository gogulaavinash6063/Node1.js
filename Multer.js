
const express=require("express")
const multer=require("multer")
const c=require("fs")
const app=express()
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb("./images")
    },
     filename:(req,file,cb)=>{
         cb(Date.now()+ "--" +file.originalname)
     },
})
const upload=multer({storage: storage})
app.post("/avi",(req,res)=>{
c.writeFile("index.json",upload.single("image"),(req,res)=>{
    console.log(req.file)
    res.send("success")
})
})
app.listen(3004,()=>{
    console.log("hi")
})