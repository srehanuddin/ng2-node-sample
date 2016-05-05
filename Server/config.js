
var mongoose = require('mongoose');

//var dbStr = 'mongodb://test:test@ds017678.mlab.com:17678/sample-ng2-node';
var dbStr = 'mongodb://localhost/sample-app-db';

mongoose.connect(dbStr, function(err, db){
  if(err){
    console.log("Can not connect to DB");
    console.log(err);
  }
  else{
    console.log("Connected to DB");
  }
});

var CityModel = mongoose.model('Cities', {
  'CriteriaID': Number,
  'Name': String,
  'CanonicalName': String,
  'ParentID': Number,
  'CountryCode': String,
  'TargetType': String,
  'Status': String
});

module.exports.models = module.exports.models || {};
module.exports.models.CityModel = CityModel;