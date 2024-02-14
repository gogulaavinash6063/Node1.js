let database = require("mysql");
let con = database.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'college'
});
con.connect((err) => {
    if(err){
        console.log(err);
    }else{
        console.log("success connection ");

    }
    
});
module.exports = con;
