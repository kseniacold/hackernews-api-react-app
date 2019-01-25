import React from 'react';
import { Link } from 'react-router-dom';

const HNHeader = () => (
  <div className="HNHeader">
    <Link style={{display: "inline-block", color: "black", marginRight: "50px"}} to="/hacker-news">All News</Link>
    <Link style={{display: "inline-block", color: "black"}} to="/my-bookmarks">Bookmarks</Link>
  </div>
);

export default HNHeader;