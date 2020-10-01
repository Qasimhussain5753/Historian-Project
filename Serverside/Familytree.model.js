var mongoose = require('mongoose');

// const { String } = require('window-or-global');
 mongoose.connect('mongodb://localhost/Familytree9', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});
var Schema = mongoose.Schema;
// var schema1 = new Schema({
//   person:  String,
//   personLabel: String,
//   cityLabel: String,
//   latLabel: String,
// });
var historian= new Schema({
  person:  String,
  personLabel: String,
  personDescription: String,
  DOB: String,
  image: String
});

// var schema = new Schema({
//   name: String,
//   parent: String
// });
// schema.set('toObject',{
//   transform: function (doc, ret) {
    
//     delete ret._id
//     delete ret.__v
//   }
// })


module.exports = mongoose.model('Model1', schema);
// module.exports = mongoose.model('Model', historian);