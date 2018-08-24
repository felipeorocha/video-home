import React, { Component } from 'react';

import styles from '../styles/SearchBar.css';

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
      <div className={styles.seacrhBarContainer}>
        <header className={styles.header}>
          <input className={styles.input} onChange={this.handleInputChange} />
          <button className={styles.button}>Search</button>
        </header>
      </div>
    );
  }
};

export default SearchBar;
