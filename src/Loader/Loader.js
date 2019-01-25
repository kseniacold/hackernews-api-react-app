import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import './Loader.css';

const Loader = () => (
  <div className="Loader__wrapper"><CircularProgress className="Loader" color="primary" /></div>
);

export default Loader;