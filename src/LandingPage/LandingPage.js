import React from 'react';

// Static Landing Page Components
import Hero from '../Hero/Hero';
import Clients from '../Clients/Clients';
import Solutions from '../Solutions/Solutions';
import Policies from '../Policies/Policies';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

const LandingPage = () => (
  <div className="LandingPage">
      <Hero />
      <Clients />
      <Solutions />
      <Policies />
      <Contact />
      <Footer />
    </div>
);

export default LandingPage;