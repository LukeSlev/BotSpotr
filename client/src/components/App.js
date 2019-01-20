import React, { Component } from 'react';
import '../styles/App.css';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-vt323';
import 'typeface-roboto-mono';
import 'typeface-zcool-qingke-huangyou';
import Search from './search';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 800,
  }
});


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1 className="app-title">spotbot</h1>
        </div>
        <div className="left"></div>
        <div className="right"></div>
        <div className="search">
          <Search/>
        </div>
        <div className="viz">
          {/* <Viz/> */}
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(App);
