/**
 * Created by Rehan on 5/5/2016.
 */

var express = require('express');
var router = express.Router();
var path = require('path');

var controller = require('./../controllers/controller');

router.get('/initData', function(req, res) {
    controller.initData(req, res);
});

router.get('/cities/:page', function(req, res) {
    controller.getCities(req, res);
});


//Angular 2 Routes
router.get('/home/:id?', function(req, res) {

    var file = path.resolve(__dirname , '../../client/index.html');
    console.log(file)

    res.sendFile(file);
});



module.exports = router;