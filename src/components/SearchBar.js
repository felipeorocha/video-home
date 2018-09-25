import React, { Component } from 'react';
import { Link } from 'react-router-dom'

import styles from '../styles/SearchBar.css';

class SearchBar extends Component {

  state = {
    searchTerm: ''
  }

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value })
    this.props.onSearchTerm(event.target.value);
  }

  handleInputChange = searchedTerm => {
    this.onInputChange(searchedTerm)
  }

  render() {
    return (
      <div className={styles.seacrhBarContainer}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <input type="text" className={styles.input} onChange={this.handleInputChange}/>
            <button className={styles.button} type="button">Search</button>
          </div>
          <Link to="/bookmarks">
            <button className={styles.bookmarkButton}>
              Bookmarks
            </button>
          </Link>
        </header>
      </div>
    );
  }
}

export default SearchBar;
