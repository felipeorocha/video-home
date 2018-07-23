import React from 'react';
import VideoListItem from './VideoListItem';

const VideoList = (props) => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem onVideoSelected={props.onVideoSelect} key={video.etag} video={video} />
  });

  return (
    <ul style={{ maxWidth: '40%', listStyleType: 'none' }}>
      {videoItems}
    </ul>
  );
};

export default VideoList;
