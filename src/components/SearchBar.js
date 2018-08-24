import React, { Component } from 'react';

import Bookmarks from './Bookmarks';

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

  bookmarkPage = () => {
    return <Bookmarks />
  }


  // To avoid handleInputSearch, could be used the sintax: onChange={event => this.onInputChange(event.target.value)}

  render(){
    return(
      <div className={styles.seacrhBarContainer}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <input className={styles.input} onChange={this.handleInputChange} />
            <button className={styles.button}>Search</button>
          </div>
          <button onClick={this.bookmarkPage} className={styles.bookmarkButton}>Bookmarks</button>
        </header>
      </div>
    );
  }
};

export default SearchBar;
