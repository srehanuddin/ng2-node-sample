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

                    var tmp = {};
                    var tmpKey = null;
                    for(var k in doc){
                        tmpKey = k;
                        tmpKey = tmpKey.replace(/\ /g,'');
                        tmp[tmpKey] = doc[k];
                    }

                    var city = new CityModel(tmp);
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

controller.getCities = function(req, res){

    var CityModel = models.CityModel;

    CityModel.count({})
        .exec(function(err, count){
            if(err){
                console.log("err in count ",err);
                res.send({status : false, error : err, message : "Error In Finding Data"})
                return;
            }

            console.log("Total Records : " + count);

            CityModel.find({})
                .limit(15)
                .exec(function(err, data){
                    if(err){
                        console.log("err in find ", err);
                        res.send({status : false, error : err, message : "Error In Finding Data"})
                        return;
                    }
                    res.send(data);
                })

        })
}

module.exports = controller;

