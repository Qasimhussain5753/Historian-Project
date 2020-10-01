require('dotenv').config();
const mysql =require('mysql');

var con = mysql.createConnection({
    host: process.env.host,
    user: process.env.user,
    password: process.env.password,
    database: process.env.database
});
module.exports=con;