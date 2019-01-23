import React, { Component } from 'react';
import logo from './../logo.svg';

class Navigation extends Component {
  render() {
    return (
        <header className="header">
            <div className="header__logo logo">
                <img src={logo} className="logo__img" alt="Sure App Logo" />
            </div>
            <nav className="header__nav">
                <ul className="nav_right">
                    <li className="nav__item nav__item_dropdown">
                        <a href="/" className="nav__link">Products</a>
                        <img className="dropdown-icon" src="" />
                    </li>
                    <li className="nav__item">
                        <a href="/" className="nav__link">Support</a>
                    </li>
                    <li className="nav__item">
                        <a href="/" className="nav__link">Claims</a>
                    </li>
                </ul>
                <ul className="nav_left">
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
  }
}

export default Navigation;
