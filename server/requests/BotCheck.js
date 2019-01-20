var request = require('request-promise');
var io = require('socket.io-client');
const  socket = io.connect("http://localhost:5000");

require('dotenv').config();

var data = {}
data.bots = 0;
data.humans = 0;

socket.on('clearData', () => {
    console.log("clearData");
    data.bots = 0;
    data.humans = 0;
    socket.emit('updateData', data);
});

module.exports = {
    checkUser : function(payload){
        console.log("sName:"+JSON.parse(payload).user.screen_name);
        var options = {
            uri: "https://botometer-pro.p.mashape.com/2/check_account",
            method: 'POST',
            headers: {
                "X-Mashape-Key": process.env.BOTAPIKEY,
                "Content-Type": 'application/json',
                "Accept": "application/json",
            },
            body: payload
        }

        return request(options)
            .then(function(response){
                var score = JSON.parse(response).scores.english;
                if (score > 0.7){
                    data.bots++;
                    console.log("bots:"+data.bots);
                } else{
                    data.humans++;
                    console.log("humano:"+data.humans);
                }
                console.log(JSON.parse(response).scores.english);
                socket.emit('updateData', data);
                return JSON.parse(response);
            })
            .catch(function(err) {
                console.log("BotOrNot POST failed "+ err);
            });
        }
}
