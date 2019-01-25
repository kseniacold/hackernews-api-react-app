/*
 * Actions Types
 */
export const SET_STORIES = "SET_STORIES";
export const BOOKMARK_STORY = "BOOKMARK_STORY";
export const UN_BOOKMARK_STORY = "UN_BOOKMARK_STORY";

/*
 * Actions Creators
 */

export function setStories(storiesIds) {
  return { 
    type: SET_STORIES, 
    storiesIds 
  };
}

export function bookmarkStory(storyId) {
  return { 
    type: BOOKMARK_STORY, 
    storyId
  };
}

export function unBookmarkStory(storyId) {
  return { 
    type: UN_BOOKMARK_STORY, 
    storyId
  };
}