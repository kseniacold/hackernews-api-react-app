import React, { Component } from 'react';
import Hero from '../Hero/Hero';
import Clients from '../Clients/Clients';
import Solutions from '../Solutions/Solutions';
import Policies from '../Policies/Policies';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Hero />
        <Clients />
        <Solutions />
        <Policies />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
