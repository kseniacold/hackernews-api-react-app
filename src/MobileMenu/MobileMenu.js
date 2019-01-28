import React from 'react';
import logo from './surelogo_blue.svg';

import './MobileMenu.css';

const MobileMenu = ({toggleMenu}) => (
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
        <nav className="MobileMenu__nav nav">
            <ul className="Mobilemenu__nav-list">
                <li className="nav__item nav__item_dropdown">
                    <a href="/" className="nav__link">Products</a>
                    <i className="nav__dropdown-icon_mobile-menu material-icons">arrow_drop_down</i>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link">Support</a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link">Claims</a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link">Download App</a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link">Login</a>
                </li>
                <li className="nav__item nav__item_button-style">
                    <a href="/" className="nav__link">Sign Up</a>
                </li>
            </ul>
        </nav>
    </header>
);

export default MobileMenu;
