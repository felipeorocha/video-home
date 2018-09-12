import React, { Component } from 'react';

import styles from '../styles/VideoListItem.css';

class VideoListItem extends Component {
  render() {
    const {
      video,
      onVideoSelected,
      getVideoDetailed,
    } = this.props;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li className={styles.listItemContainer}>
        <div className={styles.listItemWrapper}>
          <div className={styles.thumbnail} onClick={() => onVideoSelected(video)}>
            <img alt={video.snippet.title} src={imageUrl} />
          </div>
          <div className={styles.listDetailCard}>
            <div className={styles.listDetailTitle}>{video.snippet.title}</div>
            <div onClick={() => getVideoDetailed(video.snippet.title)} className={styles.bookmark}>Favoritar</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
// import React from 'react'

// const VideoListItem = ({ video, onVideoSelect }) => {
//   const snippet = video.snippet;
//   const imageUrl = snippet.thumbnails.default.url;

//   return (
//     <li className="media" onClick={() => onVideoSelect(video)}>
//       <div className="media-left">
//         <a href="#">
//           <img className="media-object" src={imageUrl} alt="{title}" />
//         </a>
//       </div>
//       <div className="media-body">
//         <h5 className="media-heading">{snippet.title}</h5>
//       </div>
//     </li>
//   )
// }

// export default VideoListItem
