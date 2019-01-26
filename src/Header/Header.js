import React from 'react';
import MediaQuery from 'react-responsive';
import HeaderDesktop from '../HeaderDesktop/HeaderDesktop';
import HeaderMobile from '../HeaderMobile/HeaderMobile';

const Header = () => (
    <MediaQuery minWidth={1200}>
        {matches => {
          return matches
            ? <HeaderDesktop />
            : <HeaderMobile />
        }}
      </MediaQuery>
);

export default Header;
