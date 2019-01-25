import React from 'react';
import HNHeader from '../HNHeader/HNHeader';
import StoriesContainer from '../StoriesContainer/StoriesContainer';

const HackerNews = ({store}) => (
  <div className="HackerNews">
    <HNHeader />
    <StoriesContainer store={store} />
  </div>
);

export default HackerNews;