import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

// import { Provider } from 'react-redux'
// import { createStore } from 'redux';
// import hackerNewsApp from './reducers';

// Create Redux Store of our application
// const store = createStore(hackerNewsApp);

/*
Redux debug below
// Log the initial state
console.log(store.getState());

  
// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() => console.log(store.getState()));
console.log(store);

store.dispatch(bookmarkStory(1234));
store.dispatch(bookmarkStory(5678));
store.dispatch(unBookmarkStory(5678));
store.dispatch(setStories([0, 1, 2, 3, 4, 5, 6]));
console.log("After all add and remove: ", store.getState());

unsubscribe();

*/

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
