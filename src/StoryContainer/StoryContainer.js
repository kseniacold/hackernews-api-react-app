import React, { Component } from 'react';
import Story from '../Story/Story';

import axios from 'axios';

import {
  bookmarkStory,
  unBookmarkStory
} from '../actions';

class StoryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      story: null,
    };
  }

  // track state to prevent change state on unmouted component
  _isMounted = false;

  // Upddate component state every time the Store gets updated 
  // subscribe() returns a function for unregistering the listener
  // keep the handle to call when component unmounts
  unsubscribe = this.props.store.subscribe(() => {
    let _story = this._getStoryWithIsBookmarked(this.state.story);
    this.setState({
      story: _story
    });  
  });
  
  componentDidMount() {
    const fetchUrl = `https://hacker-news.firebaseio.com/v0/item/${this.props.storyId}.json`;
    this._isMounted = true;

      axios.get(fetchUrl).then(response => { 
        let _story = this._getStoryWithIsBookmarked(response.data);
        if (this._isMounted) {
          this.setState({story: _story });
        }
      }).catch(function(err) {
        console.error("Failed to fetch story from the API:", err.message);
      });
  }

  /**
   * Enhaces a story object with isBookmarked property
   * By returning a new object containing the original storyObj
   * with isBookmarked field
   */
  _getStoryWithIsBookmarked = (storyObj) => {
    let _storyId = this.props.storyId;
    let _isBookmarked = this.props.store.getState().bookmarkedStories.indexOf(_storyId) !== -1;

    return Object.assign({}, storyObj, {isBookmarked: _isBookmarked});
  }

  bookmark = (storyId) => {
    this.props.store.dispatch(bookmarkStory(storyId));
  };

  unbookmark = (storyId) => {
    this.props.store.dispatch(unBookmarkStory(storyId));
  };

  componentWillUnmount() {
    this._isMounted = false;
    this.unsubscribe();
  }

  render() {
    return ( this.state.story ?
      <Story story={this.state.story} bookmark={this.bookmark} unbookmark={this.unbookmark} /> :
      <div className="loading"></div>
    );
  }
}

export default StoryContainer;