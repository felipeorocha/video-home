import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem
      onVideoSelected={props.onVideoSelect}
      key={video.etag}
      video={video}
    />
  });

  return (
    <ul style={{ maxWidth: '40%', listStyleType: 'none', backgroundColor: '#929292', padding: '0 40px' }}>
      {videoItems}
    </ul>
  );
};

export default VideoList;
