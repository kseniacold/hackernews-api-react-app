import { SET_STORIES, BOOKMARK_STORY, UN_BOOKMARK_STORY  } from "./actions";
// import { combineReducers } from 'redux';

/**
 * Returns new application state of stories by provided action
 * Defaults to an empty [] of stories
 * @param {*} state 
 * @param {*} action 
 */
function storiesReducer(state = [], action) {
  switch (action.type) {
    case SET_STORIES:
      return Array.from(action.storiesIds);
    default:
      return state;
  }
}


/**
 * Returns a new state of bookmarkedStories
 * By provided action
 * @param {*} state 
 * @param {*} action 
 */
function bookmarkReducer(state = [], action) {
  switch (action.type) {
    
    case BOOKMARK_STORY: 
      return state.concat([action.storyId]);
    
    case UN_BOOKMARK_STORY: 
      let index = state.indexOf(action.storyId);
      // there is no story to remove, will just return current state
      if (index === -1) {
        return state;
      } else {
        let _bookmarkedStories = state
          .slice(0, index)
          .concat(state.slice(index + 1));
        return _bookmarkedStories;
      }

    default:
      return state;
  }

}

// Combine reducers
const hackerNewsApp = function (state = {}, action) {
  return {
    stories: storiesReducer(state.stories, action),
    bookmarkedStories: bookmarkReducer(state.bookmarkedStories, action)
  }
}

export default hackerNewsApp;
