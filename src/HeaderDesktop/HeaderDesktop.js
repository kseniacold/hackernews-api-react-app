import React from 'react';
import logo from './../logo.svg';

import './HeaderDesktop.css';

const HeaderDesktop = () => (
    <header className="HeaderDesktop">
        <div className="HeaderDesktop__logo">
            <img src={logo} className="HeaderDesktop__logo-img" alt="Sure App Logo" />
        </div>
        <nav className="HeaderDesktop__nav nav">
            <ul className="HeaderDesktop__nav-right">
                <li className="nav__item nav__item_dropdown">
                    <a href="/" className="nav__link">Products</a>
                    <i className="nav__dropdown-icon material-icons">arrow_drop_down</i>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link">Support</a>
                </li>
                <li className="nav__item">
                    <a href="/" className="nav__link">Claims</a>
                </li>
            </ul>
            <ul className="HeaderDesktop__nav-left">
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

export default HeaderDesktop;
