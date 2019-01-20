import React, { Component } from 'react';
import '../styles/search.css';
import Tooltip from './tooltip'
import {clearData} from '../actions/index';
const axios = require('axios');


class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {query: '', tooltipVisible: false};
  }

  onTextChange = (e) => {
    this.setState({query: e.target.value.toUpperCase()});
  }

  handleSubmit = (e) => {
    alert("A name was submitted: " + this.state.query);
    clearData();
    e.preventDefault();
    var id = this.state.query.substring(this.state.query.lastIndexOf('/') + 1);
    this.props.setTweetUrl(id);

    axios.post(`/search`, {
        url: this.state.query,
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  showTooltip = (e) => {
    e.preventDefault();
    this.setState({tooltipVisible: true});
  }

  hideTooltip = (e) => {
    e.preventDefault();
    this.setState({tooltipVisible: false});
  }


  render() {
    return (
      <div className="search-container" onMouseEnter={this.showTooltip} onMouseLeave={this.hideTooltip}>
        <form onSubmit={this.handleSubmit}>
          <label>
            <input className="search-text" type="text" value={this.state.value} onChange={this.onTextChange} />
          </label>
          <input className="search-button" type="submit" value="Verify Tweet" />
        </form>
        <Tooltip visible={this.state.tooltipVisible} text="Enter the url of a tweet whos hype you'd like to verify" />
      </div>
    );
  }
}

export default Search;
