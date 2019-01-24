import React, { Component } from 'react';
import petIcon  from './Pet_icon.svg';
import propIcon from './Property_icon.svg';
import travelIcon from './Travel_icon.svg';
import homeIcon from './Home_icon.svg';
import eventIcon from './Event_icon.svg';

import './Policies.css';

class Policies extends Component {
  render() {
    return (
       <div className="Policies">
        <div className="Policies__content">
          <h2 className="Policies__heading">
          Our partners come in all shapes and sizes, just like our policies.
          </h2>
          <div className="Policies__row">
            <div className="Policies__box Policies__box_left">
              <img className="Parters__box-icon" alt="Pet Coverage Icon" src={petIcon} />
              <div className="Policies__box-text">
                <h4 className="Policies__box-heading">Pet Coverage</h4>
                <p className="Policies__box-description">Includes preventative, accident, and comprehensive</p>
              </div>
            </div>

            <div className="Policies__box Policies__box_right">
              <img className="Parters__box-icon" alt="Travel Coverage Icon" src={travelIcon} />
              <div className="Policies__box-text">
                <h4 className="Policies__box-heading">Travel Coverage</h4>
                <p className="Policies__box-description">Includes baggage, car, rental, leisure, and flight policies</p>
              </div>
            </div> 
          </div>

          <div className="Policies__row">
            <div className="Policies__box Policies__box_left">
              <img className="Parters__box-icon" alt="Property Coverage Icon" src={propIcon}/>
              <div className="Policies__box-text">
                <h4 className="Policies__box-heading">Property Coverage</h4>
                <p className="Policies__box-description">Includes jewelry, collectibles, and smartphones policies</p>
              </div>
            </div>

            <div className="Policies__box Policies__box_right">
              <img className="Parters__box-icon" alt="Event Coverage Icon" src={eventIcon} />
              <div className="Policies__box-text">
                <h4 className="Policies__box-heading">Catastrophic Event Coverage</h4>
                <p className="Policies__box-description">Includes weddings, and special events policies</p>
              </div>
            </div>
          </div>


          <div className="Policies__row Policies__row_one-item">
            <div className="Policies__box">
              <img className="Parters__box-icon" alt="Home Coverage Icon" src={homeIcon}/>
              <div className="Policies__box-text">
                <h4 className="Policies__box-heading">Home Coverage</h4>
                <p className="Policies__box-description">Includes renters, eviction , and homeowners policies</p>
              </div>
            </div>
          </div>

        </div>
       </div>
    );
  }
}

export default Policies;
