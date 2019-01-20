const botCheck = require('./requests/BotCheck');

var express = require("express");
var bodyParser = require("body-parser");
var http = require('http');
var app = express();
var twitter = require('./requests/TwitterCheck');

require('dotenv').config({path:'../.env'});

const socketIO = require('socket.io');
const server = http.createServer(app);
io = socketIO(server);

io.on('connection', (client) => {
  client.on('updateData', (data) => {
    console.log("Updating counts");
    io.emit('dataUpdated', [{title:'Bot Count', value: data.bots, color: '#b0bec5'}, {title:'Human Count', value: data.humans, color: '#607d8b'}]);
  });
});


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

server.listen(process.env.PORT, () => {console.log("Started on PORT" + process.env.PORT);})
