import React from 'react';
import PropTypes from 'prop-types';

import './PerseidsHeader.css';

import perseidsLogoTransparent from './perseids-logo-transparent.png';

const PerseidsHeader = ({ children, component: Component, props }) => (
  <header className="navbar navbar-expand-md navbar-light bg-light perseids-react-components--navbar">
    <Component className="navbar-brand perseids-react-components--navbar-brand" {...props}>
      <img className="perseids-react-components--navbar-logo-img" src={perseidsLogoTransparent} title="perseids logo" alt="perseids logo" />
    </Component>
    {children}
  </header>
);

PerseidsHeader.defaultProps = {
  children: undefined,
  component: 'a',
  props: { href: 'https://www.perseids.org' },
};

PerseidsHeader.propTypes = {
  children: PropTypes.node,
  component: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // eslint-disable-next-line react/forbid-prop-types
  props: PropTypes.object,
};

export default PerseidsHeader;
