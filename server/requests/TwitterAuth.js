const request = require('request-promise');
require("dotenv").config();


module.exports = {
  auth: function () {
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

    request(options)
          .then((parseResp) => {
              //do something
              return JSON.parse(parseResp).access_token;
          })
          .catch(function(err) {
              console.log("OAuth Twitter POST failed "+ err);
          });
  }
}
