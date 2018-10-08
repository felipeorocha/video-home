import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { bookmarkVideo } from '../actions';

import styles from '../styles/VideoListItem.css';

class VideoListItem extends Component {
  state = {
    isClicked: false,
  };

  bookmarkeds() {
    const {
      bookmarkVideo,
      video,
    } = this.props;

    bookmarkVideo(video);
    this.setState({ isClicked: true });
    this.disabled = true;
  }

  render() {
    const {
      video,
      onVideoSelected,
    } = this.props;

    const imageUrl = video.snippet.thumbnails.default.url;

    const {
      isClicked,
    } = this.state;

    return (
      <li className={styles.listItemContainer}>
        <div className={styles.listItemWrapper}>
          <div
            role="button"
            tabIndex={0}
            className={styles.thumbnail}
            onClick={() => onVideoSelected(video)}
            onKeyPress={() => onVideoSelected(video)}
          >
            <img alt={video.snippet.title} src={imageUrl} />
          </div>
          <div className={styles.listDetailCard}>
            <div className={styles.listDetailTitle}>{video.snippet.title}</div>

            <div className="isClicked" style={{ display: 'lex', flexDirection: 'column' }}>
              <div
                onClick={this.bookmarkeds.bind(this)}
                onKeyPress={this.bookmarkeds.bind(this)}
                role="button"
                tabIndex={0}
                className={styles.bookmark}
              >
              Bookmark
              </div>
              {
                isClicked
                  ? (
                    <span
                      style={{
                        backgroundColor: 'red', height: '3px', width: '70%', marginLeft: '40px', borderRadius: '0 0 3px 3px',
                      }}
                    />) : '' }
            </div>
          </div>
        </div>
      </li>
    );
  }
}

VideoListItem.propTypes = {
  video: PropTypes.shape({
    id: PropTypes.number,
  }),
  onVideoSelected: PropTypes.func,
  bookmarkVideo: PropTypes.func,
};

VideoListItem.defaultProps = {
  video: {},
  onVideoSelected: () => {},
  bookmarkVideo: () => {},
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ bookmarkVideo }, dispatch);
}

export default connect(null, mapDispatchToProps)(VideoListItem);
