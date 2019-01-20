var express = require("express");
var bodyParser = require("body-parser");
var app = express();
require('dotenv').config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/search',function(req,res){
  var url=req.body.url;
  console.log("search twitter url: "+url);
  // do twitter search

});
app.listen(process.env.PORT,function(){
  console.log("Started on PORT 5000");
})
