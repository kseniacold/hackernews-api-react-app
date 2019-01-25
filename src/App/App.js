import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import HackerNews from '../HackerNews/HackerNews';
import Bookmarks from '../Bookmarks/Bookmarks';
import { HashRouter as Router, Route} from 'react-router-dom';

import { createStore } from 'redux';
import hackerNewsApp from '../reducers';

// Create Redux Store of our application
const store = createStore(hackerNewsApp);


class App extends Component {
  render() {
    return (
        <Router>
           <div className="App">
              <Route path="/" exact component={LandingPage} />
              <Route 
                path="/hacker-news" exact 
                render={(props) => <HackerNews {...props} store={store} />}
              />
               <Route 
                path="/my-bookmarks" exact 
                render={(props) => <Bookmarks {...props} store={store} />}
              />            
            </div>   
        </Router>
    );
  } 
}

export default App;
