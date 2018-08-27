import React, { Component } from 'react';

import styles from '../styles/VideoListItem.css';

class VideoListItem extends Component {
  render() {
    const {
      video,
      onVideoSelected,
      getVideoDetailed,
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
            <div onClick={() => getVideoDetailed(video.snippet.title)} className={styles.bookmark}>Favoritar</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
