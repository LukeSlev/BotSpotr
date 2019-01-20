const botCheck = require('./requests/BotCheck');

var express = require("express");
var bodyParser = require("body-parser");
var http = require('http');
var app = express();
const socketIO = require('socket.io');
const server = http.createServer(app);
io = socketIO(server);

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    var botCount = 0;
    var humanCount = 0;
    setInterval(() => {
      botCount++;
      humanCount++;
      client.emit('timer', {'botCount': botCount, 'humanCount': humanCount});
    }, interval);
  });
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.post('/search',function(req,res){
//   var url=req.body.url;
//   console.log("search twitter url: "+url);
// });
// app.listen(process.env.PORT,function(){
//   console.log("Started on PORT 5000");
// })

server.listen(5000, () => {console.log("Started on PORT 5000");})

