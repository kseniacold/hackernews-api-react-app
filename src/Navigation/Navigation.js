import React, { Component } from 'react';
import logo from './../logo.svg';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
        <header className="Header">
            <div className="Header__logo">
                <img src={logo} className="Header__logo-img" alt="Sure App Logo" />
            </div>
            <nav className="Header__nav nav">
                <ul className="Header__nav-right">
                    <li className="nav__item nav__item_dropdown">
                        <a href="/" className="nav__link">Products</a>
                        <img className="dropdown-icon" src="" alt="" />
                    </li>
                    <li className="nav__item">
                        <a href="/" className="nav__link">Support</a>
                    </li>
                    <li className="nav__item">
                        <a href="/" className="nav__link">Claims</a>
                    </li>
                </ul>
                <ul className="Header__nav-left">
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
