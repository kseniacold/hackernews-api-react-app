import React, { Component } from 'react';
import Stories from '../Stories/Stories';

class BookmarkedStoriesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stories: null
    };
  }

  componentDidMount() { 
    // stories are null - let's get them from the Store
    if (!this.state.stories) {
      this.setState({
        stories: this.props.store.getState().bookmarkedStories
      });
    }
  }

  private 

  // Upddate component state every time the Store gets updated 
  // subscribe() returns a function for unregistering the listener
  // keep the handler to call when component unmounts
  unsubscribe = this.props.store.subscribe(() => {
    this.setState({
      stories: this.props.store.getState().bookmarkedStories
    });
  });

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    if (!this.state.stories) {
      return (<div className="loading">...</div>);

    } else if (this.state.stories.constructor === Array && this.state.stories.length === 0) { // There is no bookmarked stories
      return (<div className="no-bookmarked">You don't have any bookmarked stories.</div>);

    }

    return (<Stories stories={this.state.stories} store={this.props.store}/>);
  }
}

export default BookmarkedStoriesContainer;
