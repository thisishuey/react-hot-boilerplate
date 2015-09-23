import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Layout, Home, NotFound, Profile, Login } from './pages';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home} />
    <Route path="login" component={Login} />
    <Route path="profile/:username" component={Profile} />
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
