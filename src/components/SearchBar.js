import React, { Component } from 'react';

class SearchBar extends Component {
  state = {
    searchTerm: ''
  }

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value });
    this.props.onSearch(event.target.value);
  }

  handleInputChange = searchedTerm => {
    this.onInputChange(searchedTerm)
  }

  // To avoid handleInputSearch, could be used the sintax: onChange={event => this.onInputChange(event.target.value)}

  render(){
    return(
      <div>
        <input onChange={this.handleInputChange} />
      </div>
    );
  }
};

export default SearchBar;
