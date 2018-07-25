import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      term: ''
    }
  };

  onInputChange = term => {
    this.setState({ term: term });
    this.props.onSearch(term);
  }

  handleInputChange = event => {
    this.onInputChange(event.target.value)
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
