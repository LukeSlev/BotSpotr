import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
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

export default App;
