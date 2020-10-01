var mongoose = require("mongoose");
const Address = require('../address')
const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
var port = 5000;
const {
  FamilytreeModel,
  ContributorModel,
  CoordinateModel,
  ProfessionModel,
} = require("../Ontology/models/Models");
// const { require } = require("window-or-global");
// const { console, process } = require("window-or-global");
// var kennel2 = require("./Model.js");

const router = express.Router();
// var uri = "mongodb://localhost/Poet1";


// mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.connect(`mongodb://${Address.IP}/Alldata1`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection
  .once("open", function () {
    console.log("MongoDB database connection established successfully");
  })
  .on("error", function (error) {
    console.log("Connection Error", error);
  });

app.use("/", router);
router.route("/Coordinate").get(function (req, res) {
  CoordinateModel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
router.route("/Contributor").get(function (req, res) {
  ContributorModel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
router.route("/familytree").get(function (req, res) {
  FamilytreeModel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
router.route("/profession").get(function (req, res) {
  ProfessionModel.find({}, function (err, result) {
    if (err) {
      res.send(err);
    } else {
      console.log(result);
      res.send(result);
    }
  });
});
router.route;
app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
