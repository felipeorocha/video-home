import React, { Component } from 'react';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTube } from './actions/index';

import SearchBar from './components/SearchBar';

import styles from './styles/App.css';

class App extends Component {
  state = {
    selectedVideo: null
  }

  componentDidMount() {
    this.search('');
  }

  search(term) {
    this.props.fetchTube(term);
  }

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedVideo: nextProps.selectedVideo });
  }

  render() {
    return (
      <div className={styles.container}>
        <SearchBar
          onSearchTerm={this.search.bind(this)}
        />
        <div className={styles.videoContainer}>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            videos={this.props.videos}
            onVideoSelect={selectedVideo => this.onVideoSelect(selectedVideo)}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { videos: state.videos, selectedVideo: state.videos[0] };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTube }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
