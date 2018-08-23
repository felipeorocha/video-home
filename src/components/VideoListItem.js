import React, { Component } from 'react';

class VideoListItem extends Component {
  state = {
    videozinho: '',
    videosSelecteds: []
  };

  getVideoDetails = vid => {
    this.setState({ videozinho: vid });
    console.log("  ***VID***  ", vid);
    this.setState({ videosSelecteds: [...this.state.videosSelecteds, this.state.videozinho] })
    console.log("  ***this.state.videosSelecteds***  ", this.state.videosSelecteds)
  };

  render() {
    const {
      video,
      onVideoSelected,
    } = this.props;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li style={{ margin: '15px 0' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ cursor: 'pointer' }} onClick={() => onVideoSelected(video)}>
            <img alt={video.snippet.title} src={imageUrl} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ marginLeft: '15px' }}>{video.snippet.title}</div>
            <div onClick={() => this.getVideoDetails(video.snippet.title)} style={{ paddingLeft: '20px', marginLeft: '40px', zIndex: 999, backgroundColor: '#6b6b6b', height: 'fit-content', borderRadius: '3px', padding: '10px', cursor: 'pointer', alignSelf: 'center' }}>Favoritar</div>
          </div>
        </div>
      </li>
    );
  }
}

export default VideoListItem;
