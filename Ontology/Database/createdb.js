var mysql=require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "nodedb"
});
con.connect(function(err){
    if(err)
    throw err;
    console.log("Connected to the Database");
    ////// create table /////
    var sql =`create table historian1(
   person VARCHAR(255),
   personLabel VARCHAR(255) 
)`;

    con.query(sql,(err,result)=>{
        if(err)
        throw err;
        console.log("The table has been Created...");
    })

});