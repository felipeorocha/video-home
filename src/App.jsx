import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { fetchTube } from './actions';

import SearchBar from './components/SearchBar';

import styles from './styles/App.css';

class App extends Component {
  state = {
    selectedVideo: null,
  };

  componentDidMount() {
    this.search('');
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedVideo: nextProps.selectedVideo });
  }

  onVideoSelect = selectedVideo => (
    this.setState({ selectedVideo })
  )

  search = (term) => {
    const {
      fetchTube,
    } = this.props;

    fetchTube(term);
  }

  render() {
    const {
      selectedVideo,
    } = this.state;

    const {
      videos,
    } = this.props;

    return (
      <div className={styles.container}>
        <SearchBar
          onSearchTerm={this.search}
        />
        <div className={styles.videoContainer}>
          <VideoDetail video={selectedVideo} />
          <VideoList
            videos={videos}
            onVideoSelect={selectedVideo => this.onVideoSelect(selectedVideo)}
          />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  selectedVideo: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string,
    }),
  }),
  videos: PropTypes.shape({
    id: PropTypes.shape({
      videoId: PropTypes.string,
    }),
  }),
  fetchTube: PropTypes.func,
};

App.defaultProps = {
  selectedVideo: {},
  videos: {},
  fetchTube: () => {},
};

function mapStateToProps(state) {
  return { videos: state.videos, selectedVideo: state.videos[0] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTube }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
