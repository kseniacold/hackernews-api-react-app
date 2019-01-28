import React from 'react';
import HNHeader from '../HNHeader/HNHeader';
import BookmarkedStoriesContainer from '../BookmarkedStoriesContainer/BookmarkedStoriesContainer';

const Bookmarks = ({store, checkedStorage}) => (
  <div className="Bookmarks">
    <HNHeader top100isSelected={false} />
    <BookmarkedStoriesContainer store={store} checkedStorage={checkedStorage} />
  </div>
);

export default Bookmarks;