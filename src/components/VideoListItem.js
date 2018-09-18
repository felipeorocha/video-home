import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookmarkVideo } from '../actions/index';

import styles from '../styles/VideoListItem.css';

class VideoListItem extends Component {
  bookmarkeds() {
    this.props.bookmarkVideo(this.props.video.id.videoId);
  }

  render() {
    const {
      video,
      onVideoSelected,
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
            <div onClick={this.bookmarkeds.bind(this)} className={styles.bookmark}>Favoritar</div>
          </div>
        </div>
      </li>
      );
    }
  }

function mapStateToProps(state) {
  return { bookmarks: state.bookmarks };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ bookmarkVideo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoListItem);

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
