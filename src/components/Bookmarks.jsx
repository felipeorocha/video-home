import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Should use VideoList component

const Bookmarks = ({ bookmarks }) => (
  <div style={{ display: 'flex', flexFlow: 'wrap', justifyContent: 'center' }} className="bookmarks-container">
    {
      bookmarks.map(item => (
        <div
          style={{
            width: '300px',
            height: '250px',
            border: '1px solid black',
            margin: '5px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <img
            src={item.snippet.thumbnails.default.url}
            alt={item.snippet.title}
          />
          <span>{item.snippet.title}</span>
        </div>
      ))
    }
  </div>
);

Bookmarks.propTypes = {
  bookmarks: PropTypes.arrayOf,
};

Bookmarks.defaultProps = {
  bookmarks: [],
};

function mapStateToProps(state) {
  return { bookmarks: state.bookmarks };
}

export default connect(mapStateToProps)(Bookmarks);
