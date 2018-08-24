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
      <div style={{ height: '60px', background: 'brown', position: 'fixed', width: '100%', display: 'flex', justifyContent: 'center' }}>
        <header style={{ height: '100%', width: '75%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
          <input style={{ borderRadius: '3px 0 0 3px', border: '1px solid black', padding: '5px', borderRight: 'none' }} onChange={this.handleInputChange} />
          <button style={{ borderRadius: '0 3px 3px 0', border: 'solid 1px black', padding: '5px' }}>Search</button>
        </header>
      </div>
    );
  }
};

export default SearchBar;
