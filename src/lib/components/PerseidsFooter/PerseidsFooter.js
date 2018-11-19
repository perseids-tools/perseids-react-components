import React from 'react';
import PropTypes from 'prop-types';

import './PerseidsFooter.css';

import githubIcon from 'octicons/build/svg/mark-github.svg';
import reportIcon from 'octicons/build/svg/report.svg';
import twitterIcon from './twitter.svg';

const renderOcticon = (href, img, title, alt) => (
  <li className="nav-item">
    <a className="nav-link p-2" href={href} target="_blank" rel="noopener noreferrer">
      <img className="perseids-react-components--octicon" src={img} title={title} alt={alt} />
    </a>
  </li>
);

const renderTwitter = href => (
  <li className="nav-item">
    <a className="nav-link p-2" href={href} target="_blank" rel="noopener noreferrer">
      <img className="perseids-react-components--twitter" src={twitterIcon} title="Twitter" alt="Twitter Icon" />
    </a>
  </li>
);

const PerseidsFooter = ({
  children,
  github,
  report,
  twitter,
}) => (
  <footer className="footer perseids-react-components--footer">
    <nav className="navbar navbar-light bg-light py-0 perseids-react-components--footer-nav">
      <span className="navbar-text">
        © The Perseids Project 2018
      </span>

      {children}

      <ul className="navbar-nav my-2 my-lg-02 flex-row">
        {report && renderOcticon(report, reportIcon, 'Report Issue', 'Report Icon')}
        {github && renderOcticon(github, githubIcon, 'View Source on Github', 'GitHub Icon')}
        {twitter && renderTwitter(twitter)}
      </ul>
    </nav>
  </footer>
);

PerseidsFooter.defaultProps = {
  children: false,
  github: 'https://github.com/perseids-project',
  report: false,
  twitter: 'https://twitter.com/PerseidsProject',
};

const iconType = PropTypes.oneOfType([false, PropTypes.string]);

PerseidsFooter.propTypes = {
  children: PropTypes.element,
  github: iconType,
  report: iconType,
  twitter: iconType,
};

export default PerseidsFooter;
