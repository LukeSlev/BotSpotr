const Twitter = require('twitter');
const request = require('request-promise');
const bot = require('./BotCheck')
const _ = require('lodash');
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
      count: 100,
      id: payload,
      stringify_ids: true,
    }

    appClient.get('statuses/retweeters/ids.json', rtoptions , function(error, tweets, response) {
      if (!error) {
        var retweeters = Object.keys(tweets).map(function(k){return tweets[k]}).join(",");
        sample = _.sampleSize(retweeters.split(','), 13);
        appClient.post("https://api.twitter.com/1.1/users/lookup.json",{user_id: sample.join(',')} , function(error, users, response) {
          users.forEach(async function(element){
            var temp = {};
            // BotOrNot()
            temp.user = element;
            var timelineOptions = {
              user_id: element.user_id,
              screen_name: element.screen_name,
              count:60,
              include_rts:true,
            }

            var mentionsOptions = {
              q: "@"+element.screen_name,
              count:40,
            }

            console.log("screen_name " +element.screen_name);
            appClient.get("https://api.twitter.com/1.1/statuses/user_timeline.json",timelineOptions).then(function(timeline){
              // console.log("timeline"+JSON.stringify(timeline));
              // console.log(timeline);
              temp.timeline = timeline;
              userClient.get("https://api.twitter.com/1.1/search/tweets.json",mentionsOptions).then(function(mentions){
                // console.log("mention"+JSON.stringify(mentions));
                temp.mentions = mentions;
                // console.log(JSON.stringify(temp));

                bot.checkUser(JSON.stringify(temp));

              });
            });


          });

        })
      } else {
        alert("The most unfortunate thing just happened :/");
      }
   });
  }
}

// function main() {
//   getRetweeters("helplo");
// }

// main();
