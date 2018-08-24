import React, { Component } from 'react';
import VideoListItem from './VideoListItem';

import styles from '../styles/VideoList.css';

class VideoList extends Component {

  state = {
    videozinho: '',
    videosSelecteds: []
  };

  getVideoDetails = vid => {
    this.setState({ videozinho: vid });
    console.log(vid);
    
    this.setState({ videosSelecteds: [...this.state.videosSelecteds, this.state.videozinho] })

    console.log(this.state.videosSelecteds)
  };






  render() {

    const videoItems = props.videos.map(video => {
      return <VideoListItem
        onVideoSelected={props.onVideoSelect}
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
