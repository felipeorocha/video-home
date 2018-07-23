import React from 'react';

const VideoListItem = ({ video, onVideoSelected }) => { // ES6: { video, onVideoSelect } = props
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onVideoSelected(video)} style={{ cursor: 'pointer', margin: '15px 0' }}>
      <div style={{ display: 'flex' }}>
        <div>
          <img src={imageUrl} />
        </div>
        <div>
          <div style={{ marginLeft: '15px' }}>{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
