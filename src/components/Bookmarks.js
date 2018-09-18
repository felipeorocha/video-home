import React, { Component } from 'react';
import { connect } from 'react-redux';

// Should use VideoList component

class Bookmarks extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexFlow:'wrap', justifyContent: 'center' }} className="bookmarks-container">
        {
          this.props.bookmarks.map(item =>
          {
            return <div
                      style={{ width: '200px', height: '150px', border: '1px solid black',
                        margin: '5px', display: 'flex', justifyContent: 'center',
                        alignItems: 'center' }}>
                      <img
                        src={item.snippet.thumbnails.default.url}
                        alt={item.snippet.title} />
                      <span>{item.snippet.title}</span>
                      </div>
          })
        }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { bookmarks: state.bookmarks };
}

export default connect(mapStateToProps)(Bookmarks);
