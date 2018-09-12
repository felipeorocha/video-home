import { combineReducers } from 'redux';

function videos(state = [], action) {
  if (action.type === "fetch") {
    return action.payload.data.items;
  }
  return state;
}

const reducers = combineReducers({videos: videos})
export default reducers;
