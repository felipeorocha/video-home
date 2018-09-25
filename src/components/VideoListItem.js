import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookmarkVideo } from '../actions/index';

import styles from '../styles/VideoListItem.css';

class VideoListItem extends Component {
  state = {
    isClicked: false
  }

  bookmarkeds() {
    this.props.bookmarkVideo(this.props.video);
    this.setState({ isClicked: true })
    this.disabled = true;
  }

  render() {
    const {
      video,
      onVideoSelected,
    } = this.props;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li className={styles.listItemContainer}>
        <div className={styles.listItemWrapper}>
          <div className={styles.thumbnail} onClick={() => onVideoSelected(video)}>
            <img alt={video.snippet.title} src={imageUrl} />
          </div>
          <div className={styles.listDetailCard}>
            <div className={styles.listDetailTitle}>{video.snippet.title}</div>

            <div className="isClicked" style={{ display: "flex", flexDirection: "column" }}>
              <div onClick={this.bookmarkeds.bind(this)} className={styles.bookmark}>Bookmark</div>
              { this.state.isClicked ? <span style={{ backgroundColor: "red", height: "3px", width: "70%", marginLeft: "40px", borderRadius: "0 0 3px 3px" }}></span> : '' }
            </div>
          </div>
        </div>
      </li>
      );
    }
  }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ bookmarkVideo }, dispatch)
}

export default connect(null, mapDispatchToProps)(VideoListItem);
