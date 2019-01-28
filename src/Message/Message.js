import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Message.css';

const Message = ({message, actionText, actionUrl}) => (
  <div className="Message__wrapper">
    <div className="Message">{message}</div>
    { actionText && actionUrl ?
      <Link className="Message__cta" to={actionUrl}>{actionText}</Link> :
      ""
    }
  </div>
);

Message.propTypes = {
  message: PropTypes.string.isRequired,
  actionText: PropTypes.string,
  actionUrl: PropTypes.string
};

export default Message;