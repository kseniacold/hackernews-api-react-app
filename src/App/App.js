import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import HackerNews from '../HackerNews/HackerNews';
import Bookmarks from '../Bookmarks/Bookmarks';
import { HashRouter as Router, Route} from 'react-router-dom';

import { createStore } from 'redux';
import hackerNewsApp from '../reducers';

// Local Sotrage library to keep the State persistant between sessions
import localForage from "localforage";

import {
  setBookmarks
} from '../actions';

// Create Redux Store of our application
const STORE = createStore(hackerNewsApp);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedStorage: false
    };
  }

  // track state to prevent change state on unmouted component
  _isMounted = false;

  componentDidMount() {
    let _app = this;
    _app._isMounted = true;
    
    // Get bookmarks from the local storage
    localForage.getItem('hn-reader-bookmarks').then(function(value) {
      if (_app._isMounted) {
        _app.setState({
          checkedStorage: true
        });
      }

      // Dispatch action to update app Store
      if (value && value.constructor === Array) {
        STORE.dispatch(setBookmarks(value));
      }

    }).catch(function(err) {
      console.error("Failed to load bookmarks from the local storage:", err.message);
    });
  }

  // subscribe() returns a function for unregistering the listener
  // keep the handle to call when component unmounts
  unsubscribe = STORE.subscribe(() => {
    // Update Local storage
    localForage.setItem('hn-reader-bookmarks', STORE.getState().bookmarkedStories)
      .catch(function (err) {
        console.error("Failed to save bookmarks in local storage:", err.message);
      });
  });

  componentWillUnmount() {
    this._isMounted = false;
    this.unsubscribe();
  }

  render() {
    return (
        <Router>
           <div className="App">
              <Route path="/" exact component={LandingPage} />
              <Route 
                path="/hacker-news" exact 
                render={(props) => <HackerNews {...props} store={STORE} />}
              />
               <Route 
                path="/my-bookmarks" exact 
                render={(props) => <Bookmarks {...props} store={STORE} checkedStorage={this.state.checkedStorage}/>}
              />            
            </div>   
        </Router>
    );
  } 
}

export default App;
