import React from 'react';
import PropTypes from 'prop-types';

import './PerseidsHeader.css';

import perseidsLogoTransparent from './perseids-logo-transparent.png';

const PerseidsHeader = ({ children }) => (
  <header className="navbar navbar-expand-md navbar-light bg-light perseids-react-components--navbar">
    <a className="navbar-brand" href="https://www.perseids.org">
      <img className="perseids-react-components--navbar-logo-img" src={perseidsLogoTransparent} title="perseids logo" alt="perseids logo" />
    </a>
    {children}
  </header>
);

PerseidsHeader.defaultProps = {
  children: false,
};

PerseidsHeader.propTypes = {
  children: PropTypes.element,
};

export default PerseidsHeader;
