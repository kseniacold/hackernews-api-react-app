import React from 'react';
import logo from './surelogo_blue.svg';

import './HeaderMobile.css';

const HeaderMobile = ({toggleMenu}) => (
  <div className="HeaderMobile">
     <div className="HeaderMobile__logo">
          <img src={logo} className="HeaderMobile__logo-img" alt="Sure App Logo" />
      </div>
      <div onClick={toggleMenu} className="HeaderMobile__hamburger">
        <i className="material-icons HeaderMobile__hamburger-icon">
          menu
        </i>
      </div>
  </div>
);

export default HeaderMobile;