/*
 * Actions Types
 */
export const SET_STORIES = "SET_STORIES";
export const SET_BOOKMARKS = "SET_BOOKMARKS";

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

export function setBookmarks(bookmarkedStoriesIds) {
  return { 
    type: SET_BOOKMARKS, 
    bookmarkedStoriesIds
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