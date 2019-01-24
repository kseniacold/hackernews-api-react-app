import React, { Component } from 'react';
import StoryContainer from '../StoryContainer/StoryContainer';

class Stories extends Component {
  render() {
    const storiesItems = this.props.stories.map((storyId) => 
          <StoryContainer key={storyId} storyId={storyId} />
      );
    return ( 
      <div className="Stories">
        {storiesItems}
      </div>
    );
  }
}

export default Stories;