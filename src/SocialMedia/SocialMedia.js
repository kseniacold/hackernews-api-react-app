import React from 'react';

import facebook from './Facebook.svg';
import instagram from './Instagram.svg';
import twitter from './Twitter.svg';

import './SocialMedia.css';

const SocialMedia = () => (
  <div className="SocialMedia">
    <img src={twitter} className="SocialMedia__icon" alt="Twitter Icon" />
    <img src={facebook} className="SocialMedia__icon" alt="Facebook Icon" />
    <img src={instagram} className="SocialMedia__icon" alt="Instagram Icon" />
  </div>
);

export default SocialMedia;