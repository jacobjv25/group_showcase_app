var express=require('express');
var path=require('path');
var bodyParser=require('body-parser');
var bios=require('./groupinfo');
var app=express();
var likes = require('./routes/likes');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/likes', likes);

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname,'public/views/index.html'));
});

app.get('/bios', function(req,res){

  res.body=bios.people();
  res.send(res.body);
});



app.listen(3000);

//req takes the data from ajax post.
