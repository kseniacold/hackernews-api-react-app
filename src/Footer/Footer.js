import React, { Component } from 'react';
import logo  from './surelogo_blue.svg';

import './Footer.css';
import SocialMedia from '../SocialMedia/SocialMedia';

class Footer extends Component {
  render() {
    return (
       <div className="Footer">
        <div className="Footer__content">
          <div className="Footer__logo">
            <img src={logo} className="Footer__logo-img" alt="Sure App Logo" />
          </div>

          <p className="Footer__copyright">
          © 2017-2018 Sure Inc.<br />
          All rights reserved.
          </p>

          <nav className="Footer__nav">
            <ul className="Footer__nav-list">
              <li className="Footer__nav-item">
                <a href="/" className="Footer__nav-link">
                  Privacy Policy
                </a>
              </li>

              <li className="Footer__nav-item">
                <a href="/" className="Footer__nav-link">
                  Terms of Service
                </a>
              </li>

              <li className="Footer__nav-item">
                <a href="/" className="Footer__nav-link">
                  Licenses
                </a>
              </li>

              <li className="Footer__nav-item">
                <a href="/" className="Footer__nav-link">
                  Products
                </a>
              </li>

              <li className="Footer__nav-item">
                <a href="/" className="Footer__nav-link">
                  Help Center 
                </a>
              </li>

              <li className="Footer__nav-item">
                <a href="/" className="Footer__nav-link">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>
         <SocialMedia />
        </div>
       </div>
    );
  }
}

export default Footer;
