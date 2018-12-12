import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../styles/SearchBar.css';

// Should use VideoList component

class Bookmarks extends Component {

  state = {
    data: []
  };

  componentDidMount(){
    this.fetchUserVideos();
  }

  async fetchUserVideos(){
    const Authorization = localStorage.getItem('UserTokenHash');

    const res = await fetch('http://localhost:8080/api/videos', { // should be in an action
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Authorization
      }
    })
    const data = await res.json();
    this.setState({ data: data })
  }

  render() {
    return (
      <div className="pai">
        <div className={styles.seacrhBarContainer}>
          <header className={styles.header}>
            <Link to="/dashboard">
              <button className={styles.bookmarkButton}>
                Previous
              </button>
            </Link>
            <span style={{ color: "white" }}>{localStorage.getItem('UserNameLogin')}</span>
          </header>
        </div>
        <div style={{ paddingTop: "75px", display: 'flex', flexFlow:'wrap', justifyContent: 'center' }} className="bookmarks-container">
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
                      <span style={{ textAlign: "center", margin: '15px 15px 0' }}>{item.title}</span>
                      </div>
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { bookmarks: state.bookmarks };
}

export default connect(mapStateToProps)(Bookmarks);
