import React from 'react';

import { PerseidsHeader, PerseidsFooter } from '../lib';

const App = () => (
  <div>
    <PerseidsHeader>
      Header
    </PerseidsHeader>
    <div className="jumbotron bg-white">
      <div className="container bg-white">
        <h1 className="display-3 text-center">
          Body
        </h1>
      </div>
    </div>
    <PerseidsFooter
      twitter={false}
      github="https://github.com/perseids-tools/perseids-react-components"
      report="https://github.com/perseids-tools/perseids-react-components/issues"
    />
  </div>
);

export default App;
