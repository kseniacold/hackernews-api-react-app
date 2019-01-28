import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stories from '../Stories/Stories';
import Loader from '../Loader/Loader';

import axios from 'axios';

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
    this._isMounted = true;
    if (!this.state.stories || this.state.stories.length === 0) {
      axios.get('https://hacker-news.firebaseio.com/v0/topstories.json').then(response => {
        let _stories = response.data;
        let hundredStories = _stories.slice(0, this.MAX_STORIES);
        this.props.store.dispatch(setStories(hundredStories));
      }).catch(function(err) {
        console.error("Failed to fetch stories from the API:", err.message);
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

StoriesContainer.propTypes = {
  store: PropTypes.object.isRequired
};

export default StoriesContainer;
