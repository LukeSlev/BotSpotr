import React from "react";
import {Tweet} from 'react-twitter-widgets';
import '../styles/tweet.css'

const EmbedTweet = ({tweetId}) => {
    console.log("tweetid: ", tweetId);
    return (
        <div className="tweet-container">
            <Tweet tweetId={tweetId}/>
        </div>
        
    );
}

export default EmbedTweet;