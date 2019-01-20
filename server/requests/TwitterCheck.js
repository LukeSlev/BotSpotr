const Twitter = require('twitter');
const request = require('request-promise');
require('dotenv').config();

var client;

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

var temp = {};

module.exports = {
  
  getRetweeters : async function(payload){
    let results = [];
    var tok = await auth();

    var userClient = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY,
      access_token_key: process.env.TWITTER_ACCESS_KEY,
      access_token_secret:process.env.TWITTER_ACCESS_SECRET_KEY,
    });

    var appClient = new Twitter({
      consumer_key: process.env.TWITTER_CONSUMER_KEY,
      consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY,
      bearer_token: tok,
    });

    var rtoptions = {
      count: 1,
      id: payload,
      stringify_ids: true,
      cursor:100,
    }

    appClient.get('statuses/retweeters/ids.json', rtoptions , function(error, tweets, response) {
      if (!error) {
        var t = Object.keys(tweets).map(function(k){return tweets[k]}).join(",");

        appClient.post("https://api.twitter.com/1.1/users/lookup.json",{user_id: t} , function(error, users, response) {
          users.forEach(async function(element){
            // BotOrNot()
            temp.user = element;
            var timelineOptions = {
              user_id: element.user_id,
              screen_name: element.screen_name,
              count:1,
              include_rts:true,
            }

            var mentionsOptions = {
              q: "@"+element.screen_name,
              count:1,
            }

            // console.log("id " +element.id);
            appClient.get("https://api.twitter.com/1.1/statuses/user_timeline.json",timelineOptions).then(function(timeline){
              // console.log("timeline"+JSON.stringify(timeline));
              // console.log(timeline);
              temp.timeline = timeline;
              userClient.get("https://api.twitter.com/1.1/search/tweets.json",mentionsOptions).then(function(mentions){
                // console.log("mention"+JSON.stringify(mentions));
                temp.mentions = mentions;
                console.log(JSON.stringify(temp));
              });
            });
            
            
          });

        })
      } else {
        alert("you big dummy");
      }
   });
  }
}

// function main() {
//   getRetweeters("helplo");
// }

// main();
