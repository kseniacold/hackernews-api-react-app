import React, { Component } from 'react';
import assurantLogo  from './Assurant_logo.svg';
import chubbLogo from './Chubb_logo.svg';
import nationwideLogo from './Nationwide_logo.svg';
import qbeLogo from './QBE_logo.svg';

import './Clients.css';

class Clients extends Component {
  render() {
    return (
       <div className="Clients">
          <div className="Clients__logos">
            <img alt="Chubb Logo" src ={chubbLogo} />
            <img alt="Nationwide Logo" src ={nationwideLogo} />
            <img alt="QBE Logo" src ={qbeLogo} />
            <img alt="Assurant Logo" src ={assurantLogo} />
          </div>
       </div>
    );
  }
}

export default Clients;
