import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookmarkVideo } from '../actions/index';

import styles from '../styles/VideoListItem.css';

class VideoListItem extends Component {
  bookmarkeds() {
    this.props.bookmarkVideo(this.props.video);
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
            <div onClick={this.bookmarkeds.bind(this)} className={styles.bookmark}>Favoritar</div>
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
