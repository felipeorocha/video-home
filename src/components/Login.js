import React from 'react';

import { Link } from 'react-router-dom'
import styles from '../styles/Login.css'

const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <h1 className={styles.title}>Login</h1>
      <form className={styles.form} type="submit">
        <div className={styles.fieldsContainer}>
          <label>Login:</label>
          <input type="email" placeholder="Login..." />
        </div>
        <div className={styles.fieldsContainer}>
          <label>Password:</label>
          <input type="password" placeholder="Password..." />
          <Link className={styles.title} to="/dashboard">
            <input type="submit" value="Login" />
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;