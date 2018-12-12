import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'

class Logout extends Component {

  handleClick = e => {
    e.preventDefault();

    localStorage.setItem('UserTokenHash', null);
    localStorage.setItem('UserNameLogin', null);
    this.props.history.push('/login');
  }

  render(){
    return (
      <span style={{ cursor: "pointer" }} onClick={this.handleClick}>Logout</span>
    );
  }
}

export default withRouter(Logout);
