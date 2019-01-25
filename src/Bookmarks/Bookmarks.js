import React from 'react';
import HNHeader from '../HNHeader/HNHeader';
import BookmarkedStoriesContainer from '../BookmarkedStoriesContainer/BookmarkedStoriesContainer';

const HackerNews = ({store}) => (
  <div className="HackerNews">
    <HNHeader />
    <BookmarkedStoriesContainer store={store} />
  </div>
);

export default HackerNews;