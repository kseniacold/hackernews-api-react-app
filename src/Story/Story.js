import React from 'react';

const Story = ({story, bookmark, unbookmark}) => (
  <div className="Story">
    <h3 style={story.isBookmarked ? {color: "red"} : {}} className="Story__heading">{story.title}</h3>
    <div className="Story__score">Score: {story.score}</div>
    <div className="Story__author">By: {story.by}</div>
    <div style={{marginBottom: "50px"}}>
      <button onClick={() => {bookmark(story.id)}}>Bookmark</button>
      <button onClick={() => {unbookmark(story.id)}}>Unbookmark</button>
    </div>
  </div>
);

export default Story;