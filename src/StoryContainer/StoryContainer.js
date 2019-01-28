import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Story from '../Story/Story';

import hnApi from '../services/hn-api';

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

  /**
   * Upddates component state every time the Store gets updated
   * subscribe() returns a function for unregistering the listener\
   * keep the handle to call when component unmounts
   * 
   * Here we subscribe to listen to when someone bookmarks the story
   * The story must be not null at that point hence the check
   */
  unsubscribe = this.props.store.subscribe(() => {    
    if (this.state.story) {
      let _story = this._getStoryWithIsBookmarked(this.state.story);
      this.setState({
        story: _story
      }); 
    }
  });
  
  componentDidMount() {
    this._isMounted = true;

    // Fetch Story from the HN API
      hnApi.loadStory(this.props.storyId).then(data => { 
        if (this._isMounted) {
          let _story = this._getStoryWithIsBookmarked(data);
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

StoryContainer.propTypes = {
  storyId: PropTypes.number.isRequired,
  store: PropTypes.object.isRequired
};

export default StoryContainer;