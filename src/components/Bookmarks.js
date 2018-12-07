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
                      style={{ width: '300px', height: '250px', border: '1px solid black',
                        margin: '5px', display: 'flex', justifyContent: 'center',
                        alignItems: 'center', flexDirection: 'column' }}>
                      <img
                        src={item.snippet.thumbnails.default.url}
                        alt={item.snippet.title} />
                      <span style={{ textAlign: "center" }}>{item.snippet.title}</span>
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