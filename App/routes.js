import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import Layout from './Layout';
import Home from './Home';
import Login from './Login';

const routes = (
  <Route path="/" handler={Layout}>
    <Route path="login" handler={Login}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

export default routes;
