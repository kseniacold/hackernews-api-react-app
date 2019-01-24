import React, { Component } from 'react';
import Navigation from '../Navigation/Navigation';
import backgroundImage from './blue-bg_top.svg';

import './Hero.css';
import Banner from '../Banner/Banner';

const backgroundImgStyle = {
  backgroundImage: 'url(' + backgroundImage + ')'
};

class Hero extends Component {
  render() {
    return (
        <div style={backgroundImgStyle} className="Hero">
            <Navigation />
            <Banner />
        </div>
    );
  }
}

export default Hero;