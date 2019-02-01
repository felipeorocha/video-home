import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logout from './Logout';

import styles from '../styles/SearchBar.css';

class SearchBar extends Component {

  state = {
    searchTerm: ''
  }

  onInputChange = event => {
    this.setState({ searchTerm: event.target.value })
    this.props.onSearchTerm(event.target.value);
  }

  // handleInputChange = searchedTerm => {
  //   this.onInputChange(searchedTerm)
  // }

  render() {
    return (
      <div className={styles.seacrhBarContainer}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <input type="text" className={styles.input} onChange={this.onInputChange}/>
            <button className={styles.button} type="button">Search</button>
          </div>
          <Link to="/bookmarks">
            <button className={styles.bookmarkButton}>
              Bookmarks
            </button>
          </Link>
          <span style={{ color: "white" }}>{localStorage.getItem('UserNameLogin')}</span>
          <Logout />
        </header>
      </div>
    );
  }
}

export default SearchBar;
