import React from 'react';

import './PerseidsHeader.css';

import perseidsLogoTransparent from './perseids-logo-transparent.png';

const PerseidsHeader = (props) => (
  <header className="navbar navbar-expand-md navbar-light bg-light perseids-react-components--navbar">
    <a className="navbar-brand" href="https://www.perseids.org">
      <img className="perseids-react-components--navbar-logo-img" src={perseidsLogoTransparent} title="perseids logo" alt="perseids logo" />
    </a>
    {props.children}
  </header>
);

export default PerseidsHeader;
