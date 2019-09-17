import React from 'react';
import {
  func,
  node,
  object,
  oneOfType,
  string,
} from 'prop-types';

import './PerseidsHeader.css';

import perseidsLogoTransparent from './perseids-logo-transparent.png';

const PerseidsHeader = ({
  children,
  component: Component,
  logo,
  props,
}) => (
  <header className="navbar navbar-expand-md navbar-light bg-light perseids-react-components--navbar">
    <Component className="navbar-brand perseids-react-components--navbar-brand" {...props}>
      {logo && <img className="perseids-react-components--navbar-logo-img" src={logo} title="perseids logo" alt="perseids logo" />}
    </Component>
    {children}
  </header>
);

PerseidsHeader.defaultProps = {
  children: undefined,
  component: 'a',
  logo: perseidsLogoTransparent,
  props: { href: 'https://www.perseids.org' },
};

PerseidsHeader.propTypes = {
  children: node,
  component: oneOfType([string, func]),
  logo: string,
  // eslint-disable-next-line react/forbid-prop-types
  props: object,
};

export default PerseidsHeader;
