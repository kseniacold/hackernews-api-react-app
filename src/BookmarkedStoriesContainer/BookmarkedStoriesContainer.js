import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Stories from '../Stories/Stories';
import Loader from '../Loader/Loader';
import Message from '../Message/Message';

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
    let message = "You don't have any bookmarked stories.";
    let actionText = "Start Bookmarking";
    let actionUrl = "/hacker-news";

    if (!this.state.stories || !this.props.checkedStorage) {
      return <Loader />;

    } else if (this.state.stories.constructor === Array && this.state.stories.length === 0) { // There is no bookmarked stories
      return <Message message={message} actionText={actionText} actionUrl={actionUrl}/>;

    }

    return (<Stories stories={this.state.stories} store={this.props.store}/>);
  }
}

BookmarkedStoriesContainer.propTypes = {
  store: PropTypes.object.isRequired,
  checkedStorage: PropTypes.bool.isRequired
};

export default BookmarkedStoriesContainer;