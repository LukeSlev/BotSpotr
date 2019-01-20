import React, { Component } from 'react';
import '../styles/search.css';
const axios = require('axios');



class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {query: ''};
  }

  onTextChange = (e) => {
    this.setState({query: e.target.value.toUpperCase()});
  }

  handleSubmit = (e) => {
    alert("A name was submitted: " + this.state.query);
    e.preventDefault();

    axios.post(`/search`, {
        url: this.state.query,
      })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  render() {
    return (
      <div className="search-container">
        <form onSubmit={this.handleSubmit}>
          <label>
            <input className="search-text" type="text" value={this.state.value} onChange={this.onTextChange} />
          </label>
          <input className="search-button" type="submit" value="Verify Tweet" />
        </form>
      </div>
    );
  }
}

export default Search;
