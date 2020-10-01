const SparqlClient = require('sparql-http-client')
const fs = require('fs');
const Model = require('../models/profession.models');
const { JSON, console } = require('window-or-global');
const endpointUrl = 'https://query.wikidata.org/sparql'
const query = `
          PREFIX wd: <http://www.wikidata.org/entity/>
          PREFIX wds: <http://www.wikidata.org/entity/statement/>
          PREFIX wdv: <http://www.wikidata.org/value/>
          PREFIX wdt: <http://www.wikidata.org/prop/direct/>
          PREFIX wikibase: <http://wikiba.se/ontology#>
          PREFIX p: <http://www.wikidata.org/prop/>
          PREFIX ps: <http://www.wikidata.org/prop/statement/>
          PREFIX pq: <http://www.wikidata.org/prop/qualifier/>
          PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
          PREFIX bd: <http://www.bigdata.com/rdf#>
          
          
          SELECT ?person ?personLabel ?personDescription ?DOB ?image
          WHERE
          {
              ?person wdt:P106 wd:Q49757 .
              ?person wdt:P27 wd:Q843 .
              
              ?person wdt:P569 ?DOB.
              ?person wdt:P18 ?image
              SERVICE wikibase:label { bd:serviceParam wikibase:language "en","ur" }
          }
         
          `
const objArray=[]; 

async function main () {
  const client = new SparqlClient({ endpointUrl })
  const stream = await client.query.select(query)
 
  stream.on('data', row => {
    //  console.log(row)
    // Object.entries(row).forEach(([key, value]) => {
    //   objArray.push(key,value.value)
       console.log(row)
    //  const data = JSON.stringify(row);
      const model = new Model({
        person: row.person.value,
        personLabel: row.personLabel.value,
        // personDescription: row.personDescription.value,
        DOB: row.DOB.value,
        image: row.image.value
      })
      model.save().then(result=>{
        console.log(result);
      }).catch(error=>{
        console.log(error);
      })

    // fs.writeFileSync('germanyData.json',data);
    // })
  })
  stream.on('error', err => {
    console.error(err)
  })
  }
main()



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