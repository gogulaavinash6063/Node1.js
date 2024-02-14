let express=require("express")
let cors=require("cors")
let app=express()
app.use(cors())
app.get("/",(req,res)=>{
    res.send("hi welcome")

})
app.listen(3004,()=>{
    console.log("hi")
})