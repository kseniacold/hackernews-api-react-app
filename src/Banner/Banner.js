import React from 'react';
import { Link } from "react-router-dom";

// Style elements
import exampleImg  from './example-1.png';
import './Banner.css';


const Banner = () => (
  <div className="Banner">
    <h2 className="Banner__heading">Sure + You.</h2>

    <p className="Banner__description">
      Complement your core business and <strong>increase customer lifetime value</strong> with integrated offers from top-tier insurance carriers.
    </p>

    <Link className="Banner__button" to="/hacker-news">Get Started</Link>
    <div className="Banner__example">
      <img className="Banner__example-img" alt="Sure App Example" src ={exampleImg} />
    </div>  
  </div>
);

export default Banner;