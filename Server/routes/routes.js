/**
 * Created by Rehan on 5/5/2016.
 */

var express = require('express');
var router = express.Router();

var controller = require('./../controllers/controller');

/*router.get('/', function(req, res) {
    res.send('Birds home page');
});*/


router.get('/initData', function(req, res) {
    controller.initData(req, res);
});

module.exports = router;