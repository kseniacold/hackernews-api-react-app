import React from 'react';
import Navigation from '../Navigation/Navigation';
import backgroundImage from './blue-bg_top.svg';

import './Hero.css';
import Banner from '../Banner/Banner';

const backgroundImgStyle = {
  backgroundImage: 'url(' + backgroundImage + ')'
};

const Hero = () => (
  <div style={backgroundImgStyle} className="Hero">
    <Navigation />
    <Banner />
  </div>
);

export default Hero;