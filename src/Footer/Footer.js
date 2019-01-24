import React, { Component } from 'react';
import logo  from './surelogo_blue.svg';
import facebook from './Facebook.svg';
import instagram from './Instagram.svg';
import twitter from './Twitter.svg';

import './Footer.css';

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

            <div className="Footer__social-media">
              <img src={twitter} className="Footer__sm-icon" alt="Twitter Icon" />
              <img src={facebook} className="Footer__sm-icon" alt="Facebook Icon" />
              <img src={instagram} className="Footer__sm-icon" alt="Instagram Icon" />
            </div>
          </nav>
          
        </div>

       </div>
    );
  }
}

export default Footer;
