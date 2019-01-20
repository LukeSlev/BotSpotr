var request = require('request-promise');

require('dotenv').config();

var humans = 0; 
var bots = 0;  

 function checkUser(payload){
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
                console.log(bots);
            } else{
                humans++;
                console.log(humans);
            }
            return JSON.parse(response);
        })
        .catch(function(err) {
            console.log("BotOrNot POST failed "+ err);
        });
}


function main(){
    for(let i = 0; i < 10; ++i){
      var payload = process.env.TEST_PAYLOAD;
      checkUser(payload)
        .then(response => {
            console.log(response.scores.english);
        });
    }
}

main();
