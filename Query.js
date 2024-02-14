let express=require("express")
let cors=require("cors")
let c=require("fs")
let app=express()
let con=require("./db.js")
app.use(express.json())
var register=[]
app.use(cors())
app.get("/",(req,res)=>{
    console.log(req.body)
    con.query('insert into coders set ?',req.body,(err,data)=>{
    c.readFile("index.json",(err,data)=>{
        //console.log(JSON.parse(data));
        res.send(JSON.parse(data))
    })
})
})
app.post("/avi",(req,res)=>{
    con.query("select * from coders",(err,data)=>{
        register.push(req.body)
    c.writeFile("index1.html",JSON.stringify(register),(err)=>{
        res.send("success")
    })
})
})
app.listen(3006,()=>{
    console.log("all set ");
})


