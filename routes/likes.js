var express = require('express');
var router = express.Router();
var hueval = 0;
var erikval = 0;
var jakeval = 0;
var ahkillahval = 0;

router.post('/hue', function(req, res){
hueval += Number(req.body.val);
res.sendStatus(200);

});
router.post('/erik', function(req, res){

erikval += Number(req.body.val);
res.sendStatus(200);
});
router.post('/jake', function(req, res){

jakeval += Number(req.body.val);
res.sendStatus(200);
});
router.post('/ahkillah', function(req, res){
ahkillahval += Number(req.body.val);
res.sendStatus(200);


});
router.get('/', function(req, res){

res.send({erik:erikval,
        hue:hueval,
        jake:jakeval,
        ahkillah:ahkillahval});
return console.log('likes');

});
module.exports = router;
