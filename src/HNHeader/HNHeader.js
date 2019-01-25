import React from 'react';
import { Link } from 'react-router-dom';

import './HNHeader.css';
import heartIcon from './heart-nav.svg';


const HNHeader = () => (
  <div className="HNHeader">
    <div className="HNHeader__logo">HN Reader</div>
    <nav className="HNHeader__nav" delme="aaa">
      <Link className="HNHeader__nav-link" to="/hacker-news">Top 100</Link>
      <Link className="HNHeader__nav-link" to="/my-bookmarks">
        <img src={heartIcon} alt="" /> My Bookmarks
      </Link>
    </nav>
   
  </div>
);

export default HNHeader;