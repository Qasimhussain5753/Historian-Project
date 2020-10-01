const request  = require('request');
var query =`SELECT  ?person ?personLabel ?image
WHERE{
  ?person wdt:P106 wd:Q82955.
  ?person wdt:P18 ?image.
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }

}`;
request('https://query.wikidata.org/sparql?query=' + encodeURI(query), function (error, response, body) { // main code for a GET request to Wikidata
  console.log('error:', error); 
  console.log('statusCode:', response); 
  console.log('body:', body); 
});