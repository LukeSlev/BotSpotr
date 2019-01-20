const botCheck = require('./requests/BotCheck');

var express = require("express");
var bodyParser = require("body-parser");
var app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/search',function(req,res){
  var url=req.body.url;
  console.log("search twitter url: "+url);
});
app.listen(process.env.PORT,function(){
  console.log("Started on PORT 5000");
})
