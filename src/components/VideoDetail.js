import React from 'react';

import styles from '../styles/VideoDetails.css';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading videos...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={styles.detailContainer}>
      <div className={styles.videoContainer}>
        <iframe className={styles.iframe} src={url} title="iframe"></iframe>
      </div>
      <div>
        <div className={styles.videoTitle}>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
