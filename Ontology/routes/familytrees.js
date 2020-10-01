const SparqlClient = require("sparql-http-client");
const fs = require("fs");
// const Model = require('../models/Familytree.model');
const mongoose = require("mongoose");
const { FamilytreeModel } = require("../models/Models");

mongoose.connect(`mongodb://${process.env.IP}/Alldata1`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .once("open", function () {
    console.log("Mongodb Connected Successfully.");
  })
  .on("error", function (err) {
    console.log("Connection Error!!!", err);
  });



// const endpointUrl = "https://query.wikidata.org/sparql";
// const query = `
//           PREFIX wd: <http://www.wikidata.org/entity/>
//           PREFIX wds: <http://www.wikidata.org/entity/statement/>
//           PREFIX wdv: <http://www.wikidata.org/value/>
//           PREFIX wdt: <http://www.wikidata.org/prop/direct/>
//           PREFIX wikibase: <http://wikiba.se/ontology#>
//           PREFIX p: <http://www.wikidata.org/prop/>
//           PREFIX ps: <http://www.wikidata.org/prop/statement/>
//           PREFIX pq: <http://www.wikidata.org/prop/qualifier/>
//           PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
//           PREFIX bd: <http://www.bigdata.com/rdf#>
          
//           SELECT ?person ?personLabel ?personDescription ?DOB ?image
//           WHERE
//           {
//               ?person wdt:P106 wd:Q49757 .
//               ?person wdt:P27 wd:Q843 .
              
//               ?person wdt:P569 ?DOB.
//               ?person wdt:P18 ?image
//               SERVICE wikibase:label { bd:serviceParam wikibase:language "en","ur" }
//           }
         
//           `;
const objArray = [];

// async function main() {
//   const client = new SparqlClient({ endpointUrl });
//   const stream = await client.query.select(query);

//   stream.on("data", (row) => {
//     //  console.log(row)
//     // Object.entries(row).forEach(([key, value]) => {
//     //   objArray.push(key,value.value)
//     //  console.log(row)
//     //  const data = JSON.stringify(row);
//     const Familytree = new FamilytreeModel({
//       name: Array.forEach((data) => data.name ? data.name : "" ),
//       parent: Array.forEach((data) => data.parent ? data.parent : ""),
//     });
//     Familytree.save()
//       .then((result) => {
//         console.log(result);
//       })
//       .catch((error) => {
//         console.log("Error", error);
//       });
//   });
//   stream.on("error", (err) => {
//     console.error(err);
//   });
// }
// main();
const Array = [
  {
    name: "Mahum Ali",
    parent: "Qasim",
  },
  {
    name: "qasim2",
    parent: "ismail",
  },
  {
    name: "qasim23",
    parent: "Abel",
  },
  {
    name: "Mard e Mujahid",
    parent: "Azura",
  },
  {
    name: "qasim",
    parent: "Eve",
  },
  {
    name: "enos",
    parent: "ansar",
  },
  {
    name: "ansar",
    parent: "Eve",
  },
  {
    name: "Eve",
    parent: "",
  },
  {
    name: "Abel",
    parent: "Eve",
  },
  {
    name: "ismail",
    parent: "ansar",
  },
  {
    name: "Awan",
    parent: "Eve",
  },
  {
    name: "Azura",
    parent: "Awan",
  },
  {
    name: "Mesam",
    parent: "Qasim",
  },
];
const Familytree = new FamilytreeModel(
 Array
);
Familytree.save()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log("Error", error);
  });

// `insert into historian(person,personLabel)
// //                 values(?,?)`,
//                 [
//                     data.person,
//                     data.personLabel
//                 ]
// const JsonStringify =JSON.stringify(objArray);

// fs.writeFileSync('Political.json', JsonStringify ,'utf8')
// const Jsondata = require('./Database/Political.json');
// const mysql = require('mysql');
// const con=mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password:"",
//   database:"nodedb"

// });
// const Array = [
//   {
//     name: "Mahum Ali",
//     parent: "Qasim",
//   },
//   {
//     name: "qasim2",
//     parent: "ismail",
//   },
//   {
//     name: "qasim23",
//     parent: "Abel",
//   },
//   {
//     name: "Mard e Mujahid",
//     parent: "Azura",
//   },
//   {
//     name: "qasim",
//     parent: "Eve",
//   },
//   {
//     name: "enos",
//     parent: "ansar",
//   },
//   {
//     name: "ansar",
//     parent: "Eve",
//   },
//   {
//     name: "Eve",
//     parent: "",
//   },
//   {
//     name: "Abel",
//     parent: "Eve",
//   },
//   {
//     name: "ismail",
//     parent: "ansar",
//   },
//   {
//     name: "Awan",
//     parent: "Eve",
//   },
//   {
//     name: "Azura",
//     parent: "Awan",
//   },
//   {
//     name: "Mesam",
//     parent: "Qasim",
//   },
// ];
