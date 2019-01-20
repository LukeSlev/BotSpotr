const Twitter = require('twitter');
const request = require('request-promise');
require('dotenv').config();



function auth(){
  let consKey = process.env.TWITTER_CONSUMER_KEY;
  let consSecret = process.env.TWITTER_CONSUMER_SECRET_KEY;

  let rfc = Buffer.from(`${consKey}:${consSecret}`).toString('base64');

  var options = {
    method: 'POST',
    url: "https://api.twitter.com/oauth2/token",
    headers: {
      "Authorization":"Basic " + rfc,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: "grant_type=client_credentials",
  }

  return request(options)
        .then((parseResp) => {
            //do something
            return JSON.parse(parseResp).access_token;
        })
        .catch(function(err) {
            console.log("OAuth Twitter POST failed "+ err);
        });
}


module.exports = {
  getRetweeters : async function(payload){
    var tok = await auth();

    var client = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY,
      bearer_token: tok,
    });

    var options = {
      count: 10,
      id: payload,
      stringify_ids: true,
    }
    client.get('statuses/retweeters/ids.json', options , function(error, tweets, response) {
      if (!error) {
        // JSON.parse(parseResp).access_token;
        // for ()
      }
      tweets.ids.forEach(element => {
        console.log(element);
      });
   });
  }
}

// function main() {
//   getRetweeters("helplo");
// }

// main();
