import React, { Component } from 'react';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';

const API_KEY = 'AIzaSyAYlkHKoUwEybCYKK_bhrbXWnulOzw4cNY';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  
  componentDidMount(){
    this.videoSearch('');
  }

  onVideoSelect = chosenVideo => {
    this.setState({ selectedVideo: chosenVideo })
  }

  videoSearch = searchWord => {
    YTSearch({ key: API_KEY, term: searchWord }, (videos) => { // videos = data
      this.setState({
        videos: videos, // ES6: could be just 'videos'
        selectedVideo: videos[0]
      })
    });
  }

  handleSearch = term => {
    this.videoSearch(term)
  }

  // To avoid handleSearch video, could be used the sintax: onSearch={term => this.videoSearch(term)}

  render() {
    return (
      <div>
        <SearchBar
          onSearch={this.handleSearch}
        />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
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
