
SELECT DISTINCT ?person ?personLabel ?start  ?cityLabel ?DOBLabel ?DODLabel ?fatherLabel ?motherLabel ?childrenLabel ?siblingLabel ?relativesLabel ?spouseLabel  ?coordinates ?personStart ?image ?type ?occupation #(COUNT(?article) as ?rank)
WHERE {   
BIND (wd:Q1353 as ?city) # select the City 
{
     ?person wdt:P31* ?city . #Instance of 
     ?person wdt:P571|wdt:P580|wdt:P585 ?start. #Inception(date founded/created/year created/etc) #StartTime #and #point in time(time and date)
}
  UNION
{
    ?person wdt:P19 ?city . #place of birth
    ?person wdt:P569 ?start . #date of birth
}
  UNION
{
    ?person wdt:P20 ?city .
    ?person wdt:P570 ?start .
}
  optional { ?person wdt:P569 ?DOB. }
  optional { ?person wdt:P570 ?DOD. }
  optional { ?person wdt:P22 ?father. }
  optional { ?person wdt:P25 ?mother. }
  optional { ?person wdt:P1971 ?children. }
  optional { ?person wdt:P3373 ?sibling. }
  optional { ?person wdt:P1038 ?relatives. }
  optional { ?person wdt:P26 ?spouse. }
  OPTIONAL { ?person wdt:P625 ?coordinates }
  OPTIONAL { ?person wdt:P18 ?image }
  OPTIONAL { ?person wdt:P31 ?instance}

SERVICE wikibase:label { 
bd:serviceParam wikibase:language "en" .
?person rdfs:label ?personLabel .
?instance rdfs:label ?type .
} 
  SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en". }
}
