import { combineReducers } from 'redux';

function videos(state = [], action) {
  switch(action.type) {
    case "fetch":
      return action.payload.data.items;
    default:
      return state
  }
}

function bookmarks(state = [], action) {
  switch(action.type) {
    case "bookmarks":
      return [
        ...state,
        action.payload
      ]
    default:
      return state
  }
}

const reducers = combineReducers({ videos: videos, bookmarks: bookmarks })
export default reducers;
