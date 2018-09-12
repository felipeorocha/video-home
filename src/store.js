import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

import ReduxPromise from 'redux-promise';

export const store = createStore(reducers, composeWithDevTools(
  applyMiddleware(ReduxPromise)
));
