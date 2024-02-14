    let express=require("express")
    let fs=require("fs")
    let app=express()
    
    let con=require("./db.js")
    app.use(express.json())
    
    app.get("/avi",(req,res)=>{
        console.log(req.body)
        con.query('insert into coders set ?',req.body,(err,data)=>{
            console.log(err)
            console.log(data);
            res.status(200).json({
                "status":200,
                // data:data
            })
        })

    })
    app.get("/users",(req,res)=>{
        con.query("select * from college.coders",(err,data)=>{
            if(err){
                res.send("error")  
            }
            else{
fs.writeFile("index1.html",JSON.stringify(data),(err)=>{
    if(err){
        res.send("error in writefile")
    }
    else{
       res.send(data)
    }
})
            }
            //res.send(data)
        })
    })
    app.listen(3002,()=>{
        console.log("hi")
    })