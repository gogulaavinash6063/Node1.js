var express = require("express")
var bcrypt = require("bcrypt")
var c = require("fs")
var jwt = require("jsonwebtoken")
var app = express()
app.use(express.json())

const secretKey = 'avinash';
//const b=req.body.username

app.get("/", (req, res) => {
    const a = req.body.password
    const obj = req.body.dob;



    bcrypt.hash(a, 10, (err, hash) => {
        if (err) {
            res.send("error");
        }
        function generateToken(obj) {
            const token = jwt.sign({ obj: req.body.dob }, secretKey, { expiresIn: '1m' })
            return token;
        }
        c.writeFile("index11.html", JSON.stringify({ username: req.body.username, password: hash, dob: generateToken(obj) }), (err, data) => {
            if (err) {
                res.send("error")
            } else {
                res.send({ username: req.body.username, password: hash, dob: generateToken(obj)})
            }
        })
    })
})
    .listen(3000, () => {
        console.log("hi")
    })