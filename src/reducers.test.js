import { SET_STORIES, BOOKMARK_STORY, UN_BOOKMARK_STORY, SET_BOOKMARKS  } from "./actions";
import hackerNewsApp from './reducers';

test('Stories Reducer returns an empty arr when state & action are undefined', () => {
  const app = hackerNewsApp();
  expect(app.stories).toEqual(expect.any(Array));
  expect(app.stories).toHaveLength(0);
}); 

test('Bookmark Reducer returns an empty arr when state & action are undefined', () => {
  const app = hackerNewsApp();
  expect(app.bookmarkedStories).toEqual(expect.any(Array));
  expect(app.bookmarkedStories).toHaveLength(0);
}); 


