var request = require('request-promise');

require('dotenv').config();

var humans = 0;
var bots = 0;


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
                                bots++;
                                console.log("bots:"+bots);
                            } else{
                                humans++;
                                console.log("humano:"+humans);
                            }
                            console.losg(JSON.parse(response).scores.english);
                            return JSON.parse(response);
                        })
                        .catch(function(err) {
                            console.log("BotOrNot POST failed "+ err);
                        });
                    }
}
