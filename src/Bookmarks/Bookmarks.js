import React from 'react';
import PropTypes from 'prop-types';
import HNHeader from '../HNHeader/HNHeader';
import BookmarkedStoriesContainer from '../BookmarkedStoriesContainer/BookmarkedStoriesContainer';

const Bookmarks = ({store, checkedStorage}) => (
  <div className="Bookmarks">
    <HNHeader top100isSelected={false} />
    <BookmarkedStoriesContainer store={store} checkedStorage={checkedStorage} />
  </div>
);

Bookmarks.propTypes = {
  store: PropTypes.object.isRequired
};

export default Bookmarks;