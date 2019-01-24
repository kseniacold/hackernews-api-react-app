import React, { Component } from 'react';
import backgroundImage from './contact_bg.png';
import './Contact.css';

const backgroundImgStyle = {
  backgroundImage: 'url(' + backgroundImage + ')'
};
class Contact extends Component {
  render() {
    return (
       <div style={backgroundImgStyle} className="Contact">
        <h3 className="Contact__heading">Contact our partnerships team today.</h3>
        <form className="Contact__form">
          <input className="Contact__form-field" type="text" name="firstname" placeholder="First Name" />
          <input className="Contact__form-field" type="text" name="lastname" placeholder="Last Name" />
          <input className="Contact__form-field" type="text" name="company" placeholder="Company" />
          <input className="Contact__form-field" type="email" name="lemail" placeholder="Work Email" />
          <input className="Contact__btn-submit" type="submit" value="Submit" />  
        </form>
       </div>
    );
  }
}

export default Contact;
