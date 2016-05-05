
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/sample-app-db', function(err, db){
  if(err){
    console.log("Can not connect to DB");
    console.log(err);
  }
  else{
    console.log("Connected to DB");
  }
});

var CityModel = mongoose.model('Cities', {
  'Criteria ID': Number,
  'Name': String,
  'Canonical Name': String,
  'Parent ID': Number,
  'Country Code': String,
  'Target Type': String,
  'Status': String
});

module.exports.models = module.exports.models || {}
module.exports.models.CityModel = CityModel;