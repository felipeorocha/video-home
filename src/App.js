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
      selectedVideo: null,
      term: ''
    };
    YTSearch({ key: API_KEY, term: this.state.term }, (videos) => { // videos = data
      this.setState({
        videos: videos, // ES6: can be just videos
        selectedVideo: videos[0]
      })
    });
  }

  handleClick = event => {
    event.preventDefault();
    YTSearch({ key: API_KEY, term: this.state.term }, (videos) => { // videos = data
      this.setState({
        videos: videos, // ES6: can be just videos
        selectedVideo: videos[0]
      })
    });
  }

  onInputChange = event => {
    this.setState({ term: event.target.value });
  }

  onVideoSelect = selectedVideo => {
    this.setState({ selectedVideo: selectedVideo })
  }

  render() {
    return (
      <div>
        <SearchBar
          value={this.state.term}
          onInputChange={this.onInputChange}
          onClick={this.handleClick}
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
