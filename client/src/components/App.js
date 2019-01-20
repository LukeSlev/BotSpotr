import React, { Component } from 'react';
import '../styles/App.css';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-vt323';
import 'typeface-roboto-mono';
import 'typeface-zcool-qingke-huangyou';
import Search from './search';
import Viz from './viz';
import EmbedTweet from './tweet';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 800,
  }
});


class App extends Component {
  setTweetUrl = (tweetId) => {
    this.setState({tweetId: tweetId});
  }

  state = {tweetId: 'no tweet id yet'};

  render() {
    return (
      <div className="App">   
        <div className="header">
          <h1 className="app-title">spotbot</h1>
        </div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="search">
          <Search setTweetUrl={this.setTweetUrl}/>
        </div>
        <div className="tweet">
          <EmbedTweet tweetId={this.state.tweetId}/>
        </div>
        <div className="viz">
          <Viz/>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
