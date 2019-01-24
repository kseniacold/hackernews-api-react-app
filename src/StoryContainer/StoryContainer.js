import React, { Component } from 'react';
import Story from '../Story/Story';

class StoryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: null,
    };
  }
  
  componentDidMount() {
    const fetchUrl = `https://hacker-news.firebaseio.com/v0/item/${this.props.storyId}.json`;

    fetch(fetchUrl)
      .then(response => response.json())
      .then(story => { 
        console.log(story);
        this.setState({ story: story });
      });
  }

  render() {
    return ( this.state.story ?
      <Story story={this.state.story}/> :
      <div className="loading">...</div>
    );
  }
}

export default StoryContainer;
