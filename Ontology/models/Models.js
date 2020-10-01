const mongoose = require("mongoose");

const Schema = mongoose.Schema;

///// Create Schemas
const FamilyTreeSchema = new Schema({
  name: String,
  parent: String,
});

const ContributorSchema = new Schema({
  person: String,
  personLabel: String,
  personDescription: String,
  DOB: String,
  DOD: String,
  spouseLabel: String,
  fatherlabel: String,
  motherLabel: String,
  childLabel: String,
  stepparentLabel: String,
  relativelabel: String,
  image: String,
});

const CoordinateSchema = new Schema({
  person: String,
  personLabel: String,
  personDescription: String,
  DOB: String,
  image: String,
});

const ProfessionSchema = new Schema({});

//////Create Models

const FamilytreeModel = mongoose.model("familytree", FamilyTreeSchema);
const ContributorModel = mongoose.model("contributor", ContributorSchema);
const CoordinateModel = mongoose.model("coordinates", CoordinateSchema);
const ProfessionModel = mongoose.model("profession", ProfessionSchema);

module.exports = {
  FamilytreeModel,
  ContributorModel,
  CoordinateModel,
  ProfessionModel,
};
