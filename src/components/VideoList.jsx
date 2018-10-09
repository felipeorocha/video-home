import React from 'react';
import PropTypes from 'prop-types';
import VideoListItem from './VideoListItem';

import styles from '../styles/VideoList.css';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(video => (
    <VideoListItem
      onVideoSelected={onVideoSelect}
      key={video.etag}
      video={video}
    />
  ));

  return (
    <ul className={styles.listItem}>
      {videoItems}
    </ul>
  );
};

VideoList.propTypes = {
  videos: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string,
    }),
  }),
  onVideoSelect: PropTypes.func,
};

VideoList.defaultProps = {
  videos: {},
  onVideoSelect: () => {},
};

export default VideoList;
