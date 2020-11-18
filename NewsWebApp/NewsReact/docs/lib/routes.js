import React from 'react';
import { Route, IndexRoute, IndexRedirect } from 'react-router';
import Home from './Home';

const routes = (
  <Route path="/" component={Home}>
    <IndexRoute component={Home} />
    <Route path="index.html" component={Home} />
  </Route>
);

export default routes;
