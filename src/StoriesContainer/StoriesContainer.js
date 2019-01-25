import React, { Component } from 'react';
import Stories from '../Stories/Stories';
import Loader from '../Loader/Loader';

import {
  setStories
} from '../actions';

class StoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: null
    };
  }
  
  MAX_STORIES = 100;
  // Upddate component state every time the Store gets updated 
  // subscribe() returns a function for unregistering the listener
  // keep the handler to call when component unmount
  unsubscribe = this.props.store.subscribe(() => {
    this.setState({
      stories: this.props.store.getState().stories
    });
  });

  componentDidMount() {
    if (!this.state.stories || this.state.stories.length === 0) {
      fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
      .then(response => response.json())
      .then(stories => { 
        let hundredStories = stories.slice(0, this.MAX_STORIES);
        this.props.store.dispatch(setStories(hundredStories));
      });
    }
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return ( this.state.stories ?
      <Stories stories={this.state.stories} store={this.props.store}/> :
      <Loader />
    );
  }
}

export default StoriesContainer;
