import React from 'react';

const Story = ({story}) => (
  <div className="Story">
    <h3 className="Story__heading">{story.title}</h3>
    <div className="Story__score">Score: {story.score}</div>
    <div className="Story__author">By: {story.by}</div>
  </div>
);

export default Story;