import React from 'react';
import Header from '../Header/Header';
import backgroundImage from './blue-bg_top.svg';

import './Hero.css';
import Banner from '../Banner/Banner';

const backgroundImgStyle = {
  backgroundImage: 'url(' + backgroundImage + ')'
};

const Hero = ({toggleMenu}) => {
  return (
    <div style={backgroundImgStyle} className="Hero">
      <Header toggleMenu={toggleMenu} />
      <Banner />
    </div>
  ) 
};

export default Hero;