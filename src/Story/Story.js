import React, { Component } from 'react';

import './Story.css';
import heart from './heart.svg';
import heartSelected from './heart-selected.svg';
import pck from '../packery';

class Story extends Component {

  componentDidMount() { 
    // Initialize packery
    pck.init(pck.getPackery());
  }

  render() {
    let story = this.props.story;
    let bookmark = this.props.bookmark;
    let unbookmark = this.props.unbookmark;

    return (
      <div className={story.isBookmarked ? "Story Story_bkmarked" : "Story"}  >
        <h3 className= "Story__heading">
          <a target="_blank" rel="noopener noreferrer" className="Story__haeding-link" href={story.url}>{story.title}</a>
        </h3>
        <div className="Story__score">Score: <span className="Story__detail">{story.score}</span></div>
        <div className="Story__author">By: <span className="Story__detail">{story.by}</span></div>
        <button 
          className="Story__button" 
          onClick={ !story.isBookmarked ?
                    () => {bookmark(story.id)} :
                    () => {unbookmark(story.id)}
                  }>
          <img 
            className={story.isBookmarked ? "Story__heart Story__heart_bkmarked" : "Story__heart"}  
            alt="" 
            src={ story.isBookmarked ?
              heartSelected :
              heart
            } />
        </button>
    </div>


    );
  }
}


export default Story;