import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, ForcePath } from '../modules';

const Routes = () => (
  <Router>
    <>
      <Switch>
        <Route path="/your-chosed-path" component={ForcePath} />

        <Route path="/" component={Home} />
      </Switch>
    </>
  </Router>
);

export default Routes;
