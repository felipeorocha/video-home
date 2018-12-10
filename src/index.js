import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import Bookmarks from './components/Bookmarks';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={App} />
        <Route path="/signup" component={SignUp} />
        <Route path="/bookmarks" component={Bookmarks} />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
