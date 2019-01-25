import React, { Component } from 'react';
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

export default Stories;