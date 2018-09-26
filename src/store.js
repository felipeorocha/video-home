import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(ReduxPromise),
));

export default store;
