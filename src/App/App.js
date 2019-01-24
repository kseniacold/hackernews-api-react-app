import React, { Component } from 'react';
import LandingPage from '../LandingPage/LandingPage';
import HackerNews from '../HackerNews/HackerNews';
import { BrowserRouter as Router, Route} from 'react-router-dom';



class App extends Component {
  render() {
    return (
        <Router>
           <div className="App">
              <Route path="/" exact component={LandingPage} />
              <Route path="/hacker-news" exact component={HackerNews} />
            </div>   
        </Router>
    );
  } 
}

export default App;
