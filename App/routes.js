import React from 'react';
import { Route, IndexRoute } from 'react-router';

import { Layout, Home, NoMatch, Profile, Profiles, Login } from './pages';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Home}/>
    <Route path="login" component={Login}/>
    <Route path="profiles" component={Profiles}>
      <Route path="/profile/:username" component={Profile}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Route>
);

export default routes;
