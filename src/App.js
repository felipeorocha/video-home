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
    
    this.videosSearch('');
  }

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo: selectedVideo })
  }

  videosSearch = term => {
    YTSearch({ key: API_KEY, term: term }, (videos) => { // videos = data
      this.setState({
        videos: videos, // ES6: could be just 'videos'
        selectedVideo: videos[0]
      })
    });
  }

  handleSearch = term => {
    this.videosSearch(term)
  }

  render() {
    return (
      <div>
        <SearchBar
          onSearch={this.handleSearch}
        />
        <div style={{ display: 'flex' }}>
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={this.onVideoSelect}
            videos={this.state.videos}
          />
        </div>
      </div>
    );
  }
}

export default App;
