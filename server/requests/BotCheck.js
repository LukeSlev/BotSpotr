var request = require('request-promise');

require('dotenv').config({path:'../../.env'});

function checkUser(payload){
    var options = {
        uri: "https://botometer-pro.p.mashape.com/2/check_account",
        method: 'POST',
        headers: {
            "X-Mashape-Key": process.env.BOTORNOTAPI,
            "Content-Type": 'application/json',
            "Accept": "application/json",
        },
        body: payload
    }

    return request(options)
        .then(function(response){
            return JSON.parse(response);
        })
        .catch(function(err) {
            console.log("BotOrNot POST failed "+ err);
        });
}

// function main(){
//     console.log(process.env.BOTORNOTAPI);
//     checkUser(process.env.TEST_PAYLOAD)
//         .then(function(response){
//             console.log(response);
//         })
// }

// main();
