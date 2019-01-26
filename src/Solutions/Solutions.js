import React, { Component } from 'react';
import apiLogo from './api.svg';
import iframeLogo from './iframe.svg';
import whitelabelLogo from './white-label.svg';

import './Solutions.css';

class Solutions extends Component {
  render() {
    return (
       <div className="Solutions">
          <h1 className="Solutions__heading">
            Choose the solution that’s right for your business.
          </h1>
          <div className="Solutions__features">
            <div className="Solutions__features-item">
              <img alt="" src={apiLogo} className="Solutions__features-icon_desktop" />
              <div className="Solutions__features-box">
              <img alt="" src={apiLogo} className="Solutions__features-icon_mob" />
                <h3 className="Solutions__features-heading">API</h3>
                <p className="Solutions__features-description">{`The Sure API is a set of RESTful
  endpoints that allow you to customize
  the look and feel for a truly native
  experience.`}</p>
              </div>
            </div>

            <div className="Solutions__features-item">
              <img alt="" src={iframeLogo} className="Solutions__features-icon_desktop" />
              <div className="Solutions__features-box">
                <img alt="" src={iframeLogo} className="Solutions__features-icon_mob" />
                <h3 className="Solutions__features-heading">iFrame</h3>
                <p className="Solutions__features-description">{`The iFrame solution allows for easy
  integration - simply place a line of code
  to embed an insurance form anywhere
  on your site. `}</p>
              </div>
            </div>

            <div className="Solutions__features-item">
              <img alt="" src={whitelabelLogo} className="Solutions__features-icon_desktop" />
              <div className="Solutions__features-box">
                <img alt="" src={whitelabelLogo} className="Solutions__features-icon_mob" />
                <h3 className="Solutions__features-heading">White Label</h3>
                <p className="Solutions__features-description">{`Sure will build and host a branded page,
  which you can link to from a webpage or
  an email.`}</p>
              </div>
            </div>

          </div>
       </div>
    );
  }
}

export default Solutions;
