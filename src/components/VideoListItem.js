import React, { Component } from 'react';

class VideoListItem extends Component {
  state = {
    videozinho: ''
  };

  getVideoDetails = vid => {
    this.setState({ videozinho: vid });
    console.log(vid);
  };

  render() {
    const {
      video,
      onVideoSelected,
    } = this.props;

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
      <li style={{ cursor: 'pointer', margin: '15px 0' }}>
        <div style={{ display: 'flex' }}>
          <div onClick={() => onVideoSelected(video)}>
            <img alt={video.snippet.title} src={imageUrl} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div style={{ marginLeft: '15px' }}>{video.snippet.title}</div>
            <div onClick={() => this.getVideoDetails(video.snippet.title)} style={{ paddingLeft: '20px', zIndex: 999, backgroundColor: '#6b6b6b', height: 'fit-content' }}>Favoritar</div>
          </div>
        </div>
      </li>
    );
  }
}


export default VideoListItem;
































// import React, { Component } from 'react';

// class App extends Component {

// const VideoListItem = ({ video, onVideoSelected }) => { // ES6: { video, onVideoSelect } = props
//   const imageUrl = video.snippet.thumbnails.default.url;

//   state = {
//     videozinho: ''
//   }

//   const getVideoDetails = (vid) => {

//     this.setState({ videozinho: vid })

//     console.log(state.videozinho)
//   };

//   return (
//     <li style={{ cursor: 'pointer', margin: '15px 0' }}>
//       <div style={{ display: 'flex' }}>
//         <div onClick={() => onVideoSelected(video)}>
//           <img alt={video.snippet.title} src={imageUrl} />
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
//           <div style={{ marginLeft: '15px' }}>{video.snippet.title}</div>
//           <div onClick={getVideoDetails(video.snippet.title)} style={{ paddingLeft: '20px', zIndex: 999, backgroundColor: '#6b6b6b', height: 'fit-content' }}>Favoritar</div>
//         </div>
//       </div>
//     </li>
//   );
// };

// export default VideoListItem;
