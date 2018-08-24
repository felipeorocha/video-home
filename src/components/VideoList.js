import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

import styles from '../styles/VideoList.css';

class VideoList extends Component {

  state = {
    videoName: '',
    selectedVideos: []
  };

  getVideoDetails = vid => {
    this.setState({ videoName: vid });
    console.log(vid);
    
    this.setState({ selectedVideos: [...this.state.selectedVideos, this.state.videozinho] })

    console.log(this.state.selectedVideos)
  };

  render() {

    const {
      videos,
      onVideoSelect,
    } = this.props;

    const videoItems = videos.map(video => {
      return <VideoListItem
        onVideoSelected={onVideoSelect}
        getVideoDetails={this.getVideoDetails}
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
