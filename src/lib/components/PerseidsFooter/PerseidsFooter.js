import React from 'react';

import './PerseidsFooter.css';

import github from 'octicons/build/svg/mark-github.svg';
import report from 'octicons/build/svg/report.svg';
import twitter from './twitter.svg';

const renderOcticon = (href, img, title, alt) => (
  <li className="nav-item">
    <a className="nav-link p-2" href={href} target="_blank">
      <img className="perseids-react-components--octicon" src={img} title={title} alt={alt} />
    </a>
  </li>
);

const renderTwitter = (href) => (
  <li className="nav-item">
    <a className="nav-link p-2" href={href} target="_blank">
      <img className="perseids-react-components--twitter" src={twitter} title="Twitter" alt="Twitter Icon" />
    </a>
  </li>
);

const PerseidsFooter = (props) => (
  <footer className="footer perseids-react-components--footer">
    <nav className="navbar navbar-light bg-light py-0 perseids-react-components--footer-nav">
      <span className="navbar-text">
        © The Perseids Project 2018
      </span>

      {props.children}

      <ul className="navbar-nav my-2 my-lg-02 flex-row">
        {props.report && renderOcticon(props.report, report, "Report Issue", "Report Icon")}
        {props.github && renderOcticon(props.github, github, "View Source on Github", "GitHub Icon")}
        {props.twitter && renderTwitter(props.twitter)}
      </ul>
    </nav>
  </footer>
);

PerseidsFooter.defaultProps = {
  report: false,
  github: "https://github.com/perseids-project",
  twitter: "https://twitter.com/PerseidsProject",
};

export default PerseidsFooter;
