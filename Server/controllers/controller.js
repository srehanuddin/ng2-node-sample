/**
 * Created by Rehan on 5/5/2016.
 */

var controller = {};

var models = require("./../config").models;

controller.initData = function(req, res){

    var Converter = require("csvtojson").Converter;
    var converter = new Converter({});

    var path = require('path');
    var filePath = path.resolve(__dirname, "./../public/data.csv");

    converter.fromFile(filePath, function(err, result){
        if(err){
            console.log("Error", err);
            res.send(err);
            return;
        } else {
            console.log("Length : ", result.length);

            var CityModel = models.CityModel;

            CityModel.remove({}, function(err, data){

                console.log("Removed All Docs");

                var counter = 0;

                result.forEach(function(doc){

                    var city = new CityModel(doc);
                    city.save(function (err, data) {

                        if (err) {
                            console.log(err);
                        } else {
                            console.log(counter + " - ID Saved : " + data._id);
                        }
                        counter++;
                        if(counter == result.length){
                            res.send("Successfully Inserted Docs : " + result.length)
                        }
                    });

                })

            })

        }
    });
}

module.exports = controller;

