import React from 'react';
import MediaQuery from 'react-responsive';
import HeaderDesktop from '../HeaderDesktop/HeaderDesktop';
import HeaderMobile from '../HeaderMobile/HeaderMobile';

import menus from '../data/menus';

const Header = ({toggleMenu}) => (
    <MediaQuery minWidth={1200}>
        {matches => {
          return matches
            ? <HeaderDesktop menus={menus}/>
            : <HeaderMobile toggleMenu={toggleMenu}/>
        }}
      </MediaQuery>
);

export default Header;