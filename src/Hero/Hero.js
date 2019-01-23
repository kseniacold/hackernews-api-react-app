import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation'
import './Hero.css';
import Banner from '../Banner/Banner';

class Hero extends Component {
  render() {
    return (
        <div className="hero-area">
            <Navigation />
            <Banner />
        </div>
    );
  }
}

export default Hero;