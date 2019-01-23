import React, { Component } from 'react';
import exampleImg  from './example-1.png';

import './Banner.css';

class Banner extends Component {
  render() {
    return (
       <div className="Banner">
          <h2 className="Banner__heading">Sure + You.</h2>
          <p className="Banner__description">
            Complement your core business and <strong>increase customer lifetime value</strong> with integrated offers from top-tier insurance carriers.
          </p>
          <button className="Banner__button">Get Started</button>
          <div className="Banner__example">
            <img className="Banner__example-img" alt="Sure App Example" src ={exampleImg} />
          </div>
       </div>
    );
  }
}

export default Banner;
