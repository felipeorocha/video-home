import React, { Component } from 'react';

import styles from '../styles/VideoListItem.css';

class VideoListItem extends Component {
  // state = {
  //   videozinho: '',
  //   videosSelecteds: []
  // };

  // getVideoDetails = vid => {
  //   this.setState({ videozinho: vid });
  //   console.log(">>>>>>> vid", vid);

  //   this.setState({ videosSelecteds: [...this.state.videosSelecteds, this.state.videozinho] })

  //   console.log(">>>>>>> this.state.videosSelecteds", this.state.videosSelecteds)
  // };

  render() {
    const {
      video,
      onVideoSelected,
      getVideoDetails,
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
            <div onClick={() => getVideoDetails(video.snippet.title)} className={styles.bookmark}>Favoritar</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
