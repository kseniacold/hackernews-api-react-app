import React from 'react';
import PropTypes from 'prop-types';
import HNHeader from '../HNHeader/HNHeader';
import StoriesContainer from '../StoriesContainer/StoriesContainer';

const HackerNews = ({store}) => (
  <div className="HackerNews">
    <HNHeader top100isSelected={true} />
    <StoriesContainer store={store} />
  </div>
);

HackerNews.propTypes = {
  store: PropTypes.object.isRequired
};

export default HackerNews;