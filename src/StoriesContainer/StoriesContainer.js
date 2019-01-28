import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stories from '../Stories/Stories';
import Loader from '../Loader/Loader';

import config from '../config';
import hnApi from '../services/hn-api';

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

  MAX_STORIES = config.maxStories;

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
      
      // Get data from Hacaker News API
      hnApi.loadStories().then(stories => {

        if (stories && stories.constructor === Array) {
          if (stories.length > this.MAX_STORIES) {
            stories = stories.slice(0, this.MAX_STORIES);
          }

          this.props.store.dispatch(setStories(stories));
        }
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
