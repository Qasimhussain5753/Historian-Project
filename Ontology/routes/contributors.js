const SparqlClient = require("sparql-http-client");
const fs = require("fs");
const { JSON, console } = require("window-or-global");
const { ContributorModel } = require("../models/Models");
const mongoose = require("mongoose");
mongoose.connect(`mongodb://${process.env.IP}/Alldata1`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection
  .once("open", function () {
    console.log("Mongodb connected successfully");
  })
  .on("error", function (error) {
    console.log("Connection Error!", error);
  });
const endpointUrl = "https://query.wikidata.org/sparql";
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
        
            SELECT ?person ?personLabel 
                    ?personDescription ?DOB 
                    ?DOD ?spouseLabel
                    ?fatherLabel ?motherLabel ?childLabel
                    ?stepparentLabel  ?relativelabel  ?image
                    WHERE
                    {
                    #           Poet
                        {
                            ?person wdt:P106 wd:Q49757
                        } 
                    #         Historian
                        union 
                        {
                            ?person wdt:P106 wd:Q201788
                        }
                    #        Writer
                        union 
                        {
                            ?person wdt:P106 wd:Q36180
                        }
                    #          Politician 
                        union 
                        {
                            ?person wdt:P106 wd:Q82955
                        } 
                    #        Warriors 
                        union 
                        {
                            ?person wdt:P106 wd:Q1250916
                        }
                    #         Military Person Army    
                        union 
                        {
                            ?person wdt:P106 wd:Q189290
                        }
                    union 
                        {
                            ?person wdt:P106 wd:Q22218400
                        }
                    
                    #            select country/state
                         { ?person wdt:P27 wd:Q843 .}
                         UNION 
                         { ?person wdt:P27 wd:Q668 .} 
                         UNION 
                         { ?person wdt:P27 wd:Q902 .} 
                         UNION 
                         { ?person wdt:P27 wd:Q837 .}
                        
                            
                        optional{  ?person wdt:P569 ?DOB.}
                        optional {?person wdt:P570 ?DOD .}
                        optional { ?person wdt:P26 ?spouse .}
                        optional { ?person wdt:P22 ?father . }
                        optional {?person wdt:P25 ?mother .}
                        optional {?person wdt:P40 ?child .}
                        optional {?person wdt:P3448 ?stepparent .}        
                        ?person wdt:P18 ?image.
                            SERVICE wikibase:label { bd:serviceParam wikibase:language "en","ur" }
                    }
         
          `;
const objArray = [];

async function main() {
  const client = new SparqlClient({ endpointUrl });
  const stream = await client.query.select(query);

  stream.on("data", (row) => {
    console.log(row);
    const Contributor = new ContributorModel({
      person: row.person ? row.person.value : "",
      personLabel: row.personLabel ? row.personLabel.value : "",
      personDescription: row.personDescription
        ? row.personDescription.value
        : "",
      DOB: row.DOB ? row.DOB.value : "",
      DOD: row.DOD ? row.DOD.value : "",
      spouseLabel: row.spouseLabel ? row.spouseLabel.value : "",
      fatherLabel: row.fatherLabel ? row.fatherLabel.value : "",
      motherLabel: row.motherlabel ? row.motherLabel.value : "",
      childLabel: row.childLabel ? row.childLabel.value : "",
      stepparentLabel: row.stepparentLabel ? row.stepparentLabel.value : "",
      image: row.image.value,
    });
    Contributor.save()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });

    // fs.writeFileSync('germanyData.json',data);
    // })
  });
  stream.on("error", (err) => {
    console.error(err);
  });
}
main();

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
