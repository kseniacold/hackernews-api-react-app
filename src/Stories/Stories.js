import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StoryContainer from '../StoryContainer/StoryContainer';

import './Stories.css';

class Stories extends Component {
  render() {
    const _store = this.props.store;
    const storiesItems = this.props.stories.map((storyId) => 
          <StoryContainer key={storyId} storyId={storyId} store={_store}/>
      );
    return ( 
      <div className="Stories">
        {storiesItems}
      </div>
    );
  }
}

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.number).isRequired,
  store: PropTypes.object.isRequired
};

export default Stories;