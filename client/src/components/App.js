import React, { Component } from 'react';
import '../styles/App.css';
import { withStyles } from '@material-ui/core/styles';
import 'typeface-vt323';
import 'typeface-roboto-mono';
import 'typeface-zcool-qingke-huangyou';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  card: {
    minWidth: 800,
  }
});

import Search from './search';


class App extends Component {
  render() {
    return (
      <div className="App">     

        <Search/>

      </div>
    );
  }
}

export default withStyles(styles)(App);
