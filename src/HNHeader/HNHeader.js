import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './HNHeader.css';
import heartIcon from './heart-nav.svg';


const HNHeader = ({top100isSelected}) => (
  <div className="HNHeader">
    <Link to="/">
      <div className="HNHeader__logo">
          <div className="HNHeader__logo-text">
            HN Reader
          </div>
      </div>
    </Link>
    <nav className="HNHeader__nav">
      <Link className={ top100isSelected ? "HNHeader__nav-link HNHeader__nav-link_selected" : "HNHeader__nav-link" }   to="/">Top 100</Link>
      <Link className={ top100isSelected ? "HNHeader__nav-link" : "HNHeader__nav-link HNHeader__nav-link_selected" } to="/my-bookmarks">
        <img className="HNHeader__nav-icon" src={heartIcon} alt="" /> My Bookmarks
      </Link>
    </nav>
   
  </div>
);

HNHeader.propTypes = {
  top100isSelected: PropTypes.bool.isRequired
};

export default HNHeader;