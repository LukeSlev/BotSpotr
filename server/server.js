const botCheck = require('./requests/BotCheck');

var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var twitter = require('./requests/TwitterCheck');

require('dotenv').config({path:'../.env'});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/search',function(req,res){
  var url=req.body.url;
  console.log("search twitter url: "+url);
  // do twitter search
  var id = url.substring(url.lastIndexOf('/') + 1);
  console.log("This id babyyyy: "+id);
  twitter.getRetweeters(id);
});

app.listen(process.env.PORT,function(){
  console.log("Started on PORT" + process.env.PORT);
})
