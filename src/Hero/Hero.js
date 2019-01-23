import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation'
import './Hero.css';

class Hero extends Component {
  render() {
    return (
        <div className="hero-area">
            <Navigation />
        </div>
    );
  }
}

export default Hero;