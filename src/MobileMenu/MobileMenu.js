import React from 'react';
import logo from './surelogo_blue.svg';

import './MobileMenu.css';
import Navigation from '../Navigation/Navigation';
import SocialMedia from '../SocialMedia/SocialMedia';

const MobileMenu = ({toggleMenu, menus}) => (
    <header className="MobileMenu">
        <header className="MobileMenu__header">
        <div className="MobileMenu__logo">
            <img src={logo} className="MobileMenu__logo-img" alt="Sure App Logo" />
        </div>
        <div onClick={toggleMenu} className="MobileMenu__close">
          <i className="material-icons">
            close
          </i>
        </div>
        </header>
        <Navigation menus={menus} isDesktop={false} />
        <SocialMedia />
    </header>
);

export default MobileMenu;
