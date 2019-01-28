import hackerNewsApp from './reducers';

import {
  setStories,
  setBookmarks,
  bookmarkStory,
  unBookmarkStory
} from './actions';

/**
 * Tests for basic reducers functionality
 * Cases for actions to be performed as exected
 * Cases for actions not mutating the initial state
 */

describe('Test Reducers functions', () => {
  test('Stories Reducer returns an empty arr when state & action are undefined', () => {
    const app = hackerNewsApp();
    expect(app.stories).toEqual(expect.any(Array));
    expect(app.stories).toHaveLength(0);
  }); 

  test('Stories Reducer returns an arr of provided stories', () => {
    const expectedArr = [1, 2, 3, 4, 5, 33, 1234567, 66666, 77, 10101];
    const stateOld = {
      stories: expectedArr,
      bookmarkedStories: []
    }

    const app = hackerNewsApp(stateOld, setStories(expectedArr));
    expect(app.stories).toEqual(expectedArr);
  }); 

  test('Stories Reducer replaces previously set stories with a new arr of stories', () => {
    const storiesOld = [1, 2, 4];
    const storiesNew = [1, 2, 3, 4, 5, 33, 1234567, 66666, 77, 10101];
    const stateOld = {
      stories: storiesOld,
      bookmarkedStories: []
    }
    const app = hackerNewsApp(stateOld, setStories(storiesNew));
    expect(app.stories).toEqual(storiesNew);
  }); 

  test('Bookmark Reducer concats previously set bookmarks and a new arr of bookmarks', () => {
    const bookmarksOld = [1, 2, 4];
    const bookmarksNew = [5, 6, 7, 33, 10101];
    const stateOld = {
      stories: [],
      bookmarkedStories: bookmarksOld
    }
    const expected = [1, 2, 4, 5, 6, 7, 33, 10101];

    const app = hackerNewsApp(stateOld, setBookmarks(bookmarksNew));
    expect(app.bookmarkedStories).toEqual(expected);
  }); 

  test('Bookmark Reducer does not mutate inital bookmarks when adding new bookmarks', () => {
    const bookmarksOld = [1, 2, 4];
    const bookmarksNew = [5, 6, 7, 33, 10101];
    const stateOld = {
      stories: [],
      bookmarkedStories: bookmarksOld
    }

    const app = hackerNewsApp(stateOld, setBookmarks(bookmarksNew));
    expect(app.bookmarkedStories).not.toBe(stateOld.bookmarkedStories);
  }); 


  test('Bookmark Reducer concats inital bookmarks with a new bookmark', () => {
    const bookmarksOld = [1, 2, 4];
    const bookmarkNew = 33;
    const stateOld = {
      stories: [],
      bookmarkedStories: bookmarksOld
    }

    const expected = [1, 2, 4, 33];
    
    const app = hackerNewsApp(stateOld, bookmarkStory(bookmarkNew));
    expect(app.bookmarkedStories).toEqual(expected);
  });

  test('Bookmark Reducer does not mutate inital bookmarks when adds a new bookmark', () => {
    const bookmarksOld = [1, 2, 4];
    const bookmarkNew = 33;
    const stateOld = {
      stories: [],
      bookmarkedStories: bookmarksOld
    }

    const app = hackerNewsApp(stateOld, bookmarkStory(bookmarkNew));
    expect(app.bookmarkedStories).not.toBe(stateOld.bookmarkedStories);
  }); 

  test('Bookmark Reducer removes a bookmark', () => {
    const bookmarksOld = [1, 2, 4, 44, 33, 55];
    const bookmarkRem = 33;

    const stateOld = {
      stories: [],
      bookmarkedStories: bookmarksOld
    }

    const expected = [1, 2, 4, 44, 55];
    
    const app = hackerNewsApp(stateOld, unBookmarkStory(bookmarkRem));
    expect(app.bookmarkedStories).toEqual(expected);
  });

  test('Bookmark Reducer does not mutate inital bookmarks when removes a bookmark', () => {
    const bookmarksOld = [1, 2, 4, 44, 33, 55];
    const bookmarkRem = 55;

    const stateOld = {
      stories: [],
      bookmarkedStories: bookmarksOld
    }

    const app = hackerNewsApp(stateOld, unBookmarkStory(bookmarkRem));
    expect(app.bookmarkedStories).not.toBe(stateOld.bookmarkedStories);
  }); 
  
  test('Bookmark Reducer returns an empty arr when state & action are undefined', () => {
    const app = hackerNewsApp();
    expect(app.bookmarkedStories).toEqual(expect.any(Array));
    expect(app.bookmarkedStories).toHaveLength(0);
  }); 
});
