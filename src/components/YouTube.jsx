import React, { Component } from 'react';

const API = 'AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA';
const channelID = 'UCXgGY0wkgOzynnHvSEVmE3A';
const result = 20;

// https://www.googleapis.com/youtube/v3/search?key=AIzaSyAOYG1Ai4mZy6L-ifZgQ8bzS87vA6v3JdA&channelId=UCXgGY0wkgOzynnHvSEVmE3A&part=snippet,id&order=date&maxResults=10

const finalURL = `https://www.googleapis.com/youtube/v3/search?key=${API}&channelId=${channelID}&part=snippet,id&order=date&maxResults=${result}`;

class Youtube extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: [],
    };
    this.clicked = this.clicked.bind(this);
  }

  clicked() {
    fetch(finalURL)
      .then(response => response.json())
      .then((responseJson) => {
        // console.log(responseJson);
        const resultyt = responseJson.items.map(obj => `https://www.youtube.com/embed/'${obj.id.videoId}`);
        this.setState({ resultyt });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    // console.log(finalURL);
    const { resultyt } = this.state;

    console.log(resultyt);

    return (
      <div>
        <button type="button" onClick={this.clicked}>Get youtube videos</button>
        {
          resultyt.map((link, i) => {
            console.log(link);
            const frame = (
              <div key={i} className="youtube">
                <iframe
                  title="iframe"
                  width="560"
                  height="315"
                  src={link}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>);
            return frame;
          })
          }
        {this.frame}
      </div>
    );
  }
}

export default Youtube;
