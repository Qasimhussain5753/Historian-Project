// const cron = require('node-cron');
var CronJob = require("cron").CronJob;
var shell = require("shelljs");
var express = require("express");
const app = express();
const Address = require('./address');
const cors = require("cors");
app.use(cors());

app.get("/", (req, res) => {
  let seconds = cronJobFormat(req.query.seconds.trim());
  let minutes = cronJobFormat(req.query.minutes.trim());
  let hours = cronJobFormat(req.query.hours.trim());
  let days = cronJobFormat(req.query.days.trim());
  let months = cronJobFormat(req.query.months.trim());
  let weeks = cronJobFormat(req.query.weeks.trim());

  function cronJobFunction(Status) {
    console.log(`${Status} is running......`);
    if (shell.exec(`node ../ontology/routes/${Status}.js`).code !== 0) {
      console.log("something went wrong..");
      shell.exist(1);
    } else {
      console.log("updation is Completed!");
    }
  }
  let familytrees = JSON.parse(req.query.familytrees);
  let contributors = JSON.parse(req.query.contributors);
  let coordinates = JSON.parse(req.query.coordinates);
  let professions = JSON.parse(req.query.professions);
 

  function cronJobFormat(val) {
    return val ? parseInt(val) : "*";
  }

  res.send({
    seconds,
    minutes,
    hours,
    days,
    months,
    weeks,
    familytrees,
    contributors,
    coordinates,
    professions,
  });

  var status = {
    familytrees: familytrees,
    contributors: contributors,
    coordinates: coordinates,
    professions: professions,
  };
  var job = new CronJob(
    `${seconds} ${minutes} ${hours} ${days} ${months} ${weeks}`,
    function () {
      console.log("Schedular running......");
      for (let key in status) {
        status[key] && cronJobFunction(key);
      }
    }
  );

  job.start();
  console.log("is job running? ", job.running);
});

app.listen(Address.PORT3, () => {
  console.log("listening to the port " + Address.PORT3);
});
