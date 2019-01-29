import React from 'react';
import Navigation from '../Navigation/Navigation';
import logo from './../logo.svg';

import './HeaderDesktop.css';

const HeaderDesktop = ({menus}) => (
    <header className="HeaderDesktop">
        <div className="HeaderDesktop__logo">
            <img src={logo} className="HeaderDesktop__logo-img" alt="Sure App Logo" />
        </div>
        <Navigation menus={menus} isDesktop={true}/>
    </header>
);

export default HeaderDesktop;