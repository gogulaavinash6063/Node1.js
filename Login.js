const express = require("express");
const app = express();
const {LocalStorage} = require("node-localstorage")
app.use(express.json());
const localstorage = new LocalStorage('./local_storage');

app.post("/register", (req, res) => {
    const data = JSON.parse(localstorage.getItem("task22")) || []
    const { firstname, lastname } = req.body 
    const valid = data.find((val)=>val.firstname==firstname && val.lastname==lastname);

    if (valid) {
        res.send("User already exists");
    } else {
        data.push(req.body);
        localstorage.setItem("task22",JSON.stringify(data,null,2));
        res.send("Registration successful");
    }
});
app.listen(3000, () => {
    console.log("Server running on port 3000");
});