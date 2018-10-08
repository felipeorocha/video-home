import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from '../styles/SearchBar.css';

class SearchBar extends Component {
  state = {
    searchTerm: '',
  };

  onInputChange = (event) => {
    const {
      onSearchTerm,
    } = this.props;

    const {
      searchTerm,
    } = this.state;

    this.setState({ searchTerm: event.target.value });
    onSearchTerm(searchTerm);
  }

  handleInputChange = (searchedTerm) => {
    this.onInputChange(searchedTerm);
  }

  render() {
    return (
      <div className={styles.seacrhBarContainer}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <input type="text" className={styles.input} onChange={this.handleInputChange} />
            <button className={styles.button} type="button">Search</button>
          </div>
          <Link to="/bookmarks">
            <button type="button" className={styles.bookmarkButton}>
              Bookmarks
            </button>
          </Link>
        </header>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onSearchTerm: PropTypes.func,
};

SearchBar.defaultProps = {
  onSearchTerm: () => {},
};

export default SearchBar;
