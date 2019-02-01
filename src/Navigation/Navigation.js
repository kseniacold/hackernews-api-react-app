import React from 'react';
import './Navigation.css';

import { Link } from 'react-router-dom';

const Navigation = ({menus, isDesktop}) => {
  const navItemsLeft = _getMenuJsx(menus.menuLeft);
  const navItemsRight = _getMenuJsx(menus.menuRight);
  if (isDesktop) {
    return (
      <nav className="Navigation Navigation_desktop">
        <ul className="Navigation__nav-left">
          {navItemsLeft}
        </ul>
        <ul className="Navigation__nav-right">
          {navItemsRight}
        </ul>
      </nav>
    );
  } else {
    const navItemsLeft = _getMenuJsx(menus.menuLeft);
    const navItemsRight = _getMenuJsx(menus.menuRight, menus.menuLeft.length);
    return (
      <nav className="Navigation Navigation_mobile">
      <ul className="Navigation__list Navigation__list_mobile">
        {navItemsLeft}
        {navItemsRight}
      </ul>
      </nav>
    );
  }
};

function _getMenuJsx(menu, shift = 0) {
  console.log("in func ", menu);
  return menu.map((menuItem, index) => {
    let cl = "Navigation__item";
    if (menuItem.buttonStyle) {
      cl += " Navigation__item_button-style"; 
    } 

    if (menuItem.dropdown) {
      cl += " Navigation__item_dropdown";
    }
    return (
      <li key={index + shift} className={cl}>
          <Link to={menuItem.url} className="Navigation__link">{menuItem.text}</Link>
          {menuItem.dropdown ? (<i className="Navigation__dropdown-icon material-icons">arrow_drop_down</i>) : ""}
      </li>
    );
  });
}

export default Navigation;