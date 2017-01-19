var express = require('express');
var router = express.Router();
var hueval = 0;
var erikval = 0;
var jakeval = 0;
var ahkillahval = 0;

router.post('/hue', function(req, res){
console.log(hueval);
hueval += Number(req.body.val);
res.sendStatus(200);
// return console.log(hueval);
});
router.post('/erik', function(req, res){
console.log('hfe');
erikval += Number(req.body.val);
res.sendStatus(200);
});
router.post('/jake', function(req, res){
console.log('husfe');
jakeval += Number(req.body.val);
res.sendStatus(200);
});
router.post('/ahkillah', function(req, res){
ahkillahval += Number(req.body.val);
res.sendStatus(200);
return console.log('res');

});
router.get('/', function(req, res){

res.send({erik:erikval,
        hue:hueval,
        jake:jakeval,
        ahkillah:ahkillahval});
return console.log('likes');

});
module.exports = router;
