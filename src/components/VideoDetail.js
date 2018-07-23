import React from 'react';

const VideoDetail = ({ video }) => { // const { video } = props;
  if (!video) {
    return <div>Loading videos...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div style={{ maxWidth: '60%' }}>
      <div style={{ height: '70%', padding: '20px 0' }}>
        <iframe style={{ width: '100%', height: '100%' }} src={url}></iframe>
      </div>
      <div>
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
}

export default VideoDetail;
