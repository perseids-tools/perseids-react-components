import React from 'react';

import { PerseidsHeader } from '../lib';

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
  </div>
);

export default App;
