const Jsondata = require('./Political.json');
const mysql=require('mysql');
const JsonStr=JSON.stringify(Jsondata);
console.log(Jsondata);
// const con=mysql.createConnection({
//     host:"localhost",
//     user: "root",
//     password: "",
//     database: "nodedb"
// });
// con.connect(function(err,data){
//     if(err){
//       return err
//     }
//     console.log("Connected to the Database.")
//       con.query(`INSERT INTO historian1(person,personLabel)
//                  values(?,?)`,
//                 [
//                   Jsondata[0].person.person,
//                   Jsondata[0].personLabel.personLabel
//                 ],
//         console.log("Values has been Inserted into the Databe")
      
//   )
//   })