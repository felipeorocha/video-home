import React from 'react';
import VideoListItem from './VideoListItem';

import styles from '../styles/VideoList.css';

const VideoList = ({ videos, onVideoSelect }) => (
  videoItems = videos.map(video => {
    return <VideoListItem
      onVideoSelected={onVideoSelect}
      key={video.etag}
      video={video}
    />
  })
  
  return (
    <ul className={styles.listItem}>
      {videoItems}
    </ul>
  );
);

export default VideoList;
