var express = require('express');
var app = express();

require("./config");

var bodyParser = require('body-parser');

app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/../Client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
})

var router = require("./routes/routes");

app.use(router);

var port = process.env.PORT || 3000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
