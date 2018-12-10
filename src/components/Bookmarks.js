import React, { Component } from 'react';
import { connect } from 'react-redux';

// Should use VideoList component

class Bookmarks extends Component {

  state = {
    data: []
  };

  componentDidMount(){
    this.fetchUserVideos();
  }

  async fetchUserVideos(){
    const res = await fetch('http://localhost:8080/api/videos', { // should be in an action
      method: 'GET',
      headers: {
        "Content-Type": "application/json"
      }
    })
    const data = await res.json();
    this.setState({ data: data })
  }

  render() {
    return (
      <div style={{ display: 'flex', flexFlow:'wrap', justifyContent: 'center' }} className="bookmarks-container">
        {
          this.state.data.map(item =>
          {
            return <div
                      style={{ width: '300px', height: '250px', border: '1px solid black',
                        margin: '5px', display: 'flex', justifyContent: 'center',
                        alignItems: 'center', flexDirection: 'column' }}
                    >
                    <img
                      src={item.videos}
                      alt={item.title}
                    />
                    <span style={{ textAlign: "center" }}>{item.title}</span>
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
