<img src="https://github.com/LukeSlev/BotSpotr/blob/master/client/src/logostraight.png" alt="Botspotr" width="300px"/>

The viral tweet analyzer!
=========================

### Use Case
<p>  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
You've probably heard about the whole 'Fake-News' epidemic that's been taking over the United States political climate. Turns out that around 15% of Twitter users are said to be automated bot accounts. During the 2016 US election, researchers estimated pro-Trump bots generated 4 tweets to every 1 pro-Clinton Tweet! This may make you think - how do you know if popular tweets are actually popular? How can you trust what's going on your favourite social media platform??
<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Well have we got an app for you! Let me introduce BotSpotr - the viral tweet analyzer! Simply give our web app the url for a tweet you want to be analyzed and we'll tell you the percentage of retweets that came from bot-like users. We take a sample set of the tweet's retweets and validate the retweeting users with the api Botometer, we then use this data to give you an idea of how organic the tweets popularity really is.
<br><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Our app is comprised of a React.js front end and a node and express.js powered back end! We use the Twitter search and tweet apis along with a special Twitter account validator api called Botometer, to gather our tweet and user account data.</p>

### Instructions
In order to use this fancy shmancy app:
* Clone the repo
* `npm install ` to get all those dependency goodies
* make a .env and add all the needed api keys and such
  * You need to add a `BOTAPIKEY`, an express server `PORT`, and a few Twitter api keys: `TWITTER_CONSUMER_KEY`, `TWITTER_CONSUMER_SECRET_KEY`, `TWITTER_ACCESS_KEY`, `TWITTER_ACCESS_SECRET_KEY`
  * links to relevent material are here: https://github.com/motdotla/dotenv and https://developer.twitter.com/en/apps
* to start the app locally once you have all the necessary environmental variables set up you run `npm run client` in one terminal window and `npm run server` in another terminal window :)

If you want to try out this app just hit our url http://botspotr.com

### App Flow
![App Flow](https://github.com/LukeSlev/BotSpotr/blob/master/client/src/appflow.png)

#### Authors
* [Zach Drever](https://github.com/zdrever)
* [Luke Slevinsky](https://github.com/LukeSlev)
* [Gillian Pierce](https://github.com/gillianpierce)
