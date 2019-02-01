import React, { Component } from 'react';
import './LandingPage.css';

// Static Landing Page Components
import Hero from '../Hero/Hero';
import Clients from '../Clients/Clients';
import Solutions from '../Solutions/Solutions';
import Policies from '../Policies/Policies';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import MobileMenu from '../MobileMenu/MobileMenu';
import menus from '../data/menus';

 class LandingPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openMobileMenu: false
    };
  }

  toggleMenu = () => {
    let toggle = !this.state.openMobileMenu;
    this.setState({
      openMobileMenu: toggle
    });
  }

   render () {
    if (this.state.openMobileMenu) {
      return (
        <div className="LandingPage">
            <MobileMenu toggleMenu={this.toggleMenu} menus={menus} />
        </div>
      );
    }

     return (
      <div className="LandingPage">
          <Hero toggleMenu={this.toggleMenu} />
          <Clients />
          <Solutions />
          <Policies />
          <Contact />
          <Footer />
        </div>
    );
   }
 }
 
export default LandingPage;