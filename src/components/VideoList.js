import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

import styles from '../styles/VideoList.css';

class VideoList extends Component {

  state = {
    selectedVideos: []
  };

  getVideoDetails = vid => {
    this.setState({
      selectedVideos: [...this.state.selectedVideos, vid]
    }, () => console.log(this.state.selectedVideos))
  };

  render() {

    const {
      videos,
      onVideoSelect,
    } = this.props;

    const videoItems = videos.map(video => {
      return <VideoListItem
        onVideoSelected={onVideoSelect}
        getVideoDetailed={this.getVideoDetails}
        key={video.etag}
        video={video}
      />
    });

    return (
      <ul className={styles.listItem}>
        {videoItems}
      </ul>
    );
  }
};

export default VideoList;
