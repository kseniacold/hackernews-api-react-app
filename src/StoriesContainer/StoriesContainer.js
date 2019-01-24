import React, { Component } from 'react';
import Stories from '../Stories/Stories';

class StoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: null,
    };
  }

  MAX_STORIES = 100;
  
  componentDidMount() {
    fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(stories => { 
        let hundredStories = stories.slice(0, this.MAX_STORIES);
        this.setState({ stories: hundredStories });
      });
  }

  render() {
    return ( this.state.stories ?
      <Stories stories={this.state.stories}/> :
      <div className="loading">...</div>
    );
  }
}

export default StoriesContainer;
