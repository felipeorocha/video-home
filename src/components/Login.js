import React, { Component } from 'react';

import { withRouter } from 'react-router-dom'
import styles from '../styles/Login.css'

class Login extends Component {

  state = {
    username: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      username: this.state.username,
      password: this.state.password
    };

    fetch('http://localhost:8080/api/login', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
    .then(responseJson => {
      console.log('<<<responseJson>>>', responseJson)
      if(responseJson.success !== false) {
        console.log("success");
        localStorage.setItem('UserTokenHash', responseJson.token);
        localStorage.setItem('UserNameLogin', responseJson.user.username);
        this.props.history.push('/dashboard');
      }
    }).catch((err) => console.log('Erro do catch: ', err));

  }

  handleUserNameChange = e => {
    this.setState({ username: e.target.value });
  }

  handlePasswordChange = e => {
    this.setState({ password: e.target.value });
  }

  render(){
    return (
      <div className={styles.loginContainer}>
        <h1 className={styles.title}>Login</h1>
        <form className={styles.form} onSubmit={this.handleSubmit}>
          <div className={styles.fieldsContainer}>
            <label>Login:</label>
            <input type="text" onChange={this.handleUserNameChange} placeholder="Login..." />
          </div>
          <div className={styles.fieldsContainer}>
            <label>Password:</label>
            <input type="password" onChange={this.handlePasswordChange} placeholder="Password..." />
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(Login);