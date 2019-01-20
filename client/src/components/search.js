import React, { Component } from 'react';

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
      <div className="Search">
        <form onSubmit={this.handleSubmit}>
          <label>
            Yeeteth:
            <input type="text" value={this.state.value} onChange={this.onTextChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default Search;
