const axios = require('axios');
require('dotenv').config();


function getRetweeters(payload){
    var options = {
        method: 'POST',
        url: URL,
        headers: {
            "X-Mashape-Key": process.env.BOTKEY,
            "Content-Type": 'application/json',
            "Accept": "application/json",
        },
        body: payload
    }

    axios.get(options)
        .then(function(parseResp){
            //do something
        })
        .catch(function(err) {
            console.log("Post BotOrNot POST failed "+ err);
        });
}
