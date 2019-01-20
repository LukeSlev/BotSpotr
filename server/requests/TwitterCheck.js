const axios = require('axios');
const Twitter = require('twitter');
require('dotenv').config();


function getRetweeters(payload){
  var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET_KEY,
    bearer_token: process.env.TWITTER_BEARER_TOKEN
  });

  var params = {screen_name: 'nodejs'};
  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      console.log(tweets);
    }
  });
}
