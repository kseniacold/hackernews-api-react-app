import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import Clients from '../Clients/Clients';
import Solutions from '../Solutions/Solutions';
import Policies from '../Policies/Policies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Clients />
        <Solutions />
        <Policies />
      </div>
    );
  }
}

export default App;
