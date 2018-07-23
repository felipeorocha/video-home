import React, { Component } from 'react';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyAYlkHKoUwEybCYKK_bhrbXWnulOzw4cNY';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: 'slipknot' }, (videos) => { // videos = data
      this.setState({
        videos: videos, // ES6: can be just videos
        selectedVideo: videos[0]
      })
    });

  }

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo: selectedVideo })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
