import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import Router, { Route, Link, DefaultRoute, RouteHandler } from 'react-router';

import { Container } from '../Components';

import style from './style';
import rules from './rules';

import Home from './Home';
import Login from './Login';

require('bootstrap/less/bootstrap.less');
require('font-awesome/less/font-awesome.less');

@Radium
class App extends Component {
  render() {
    return (
      <Container>
        <NavBar/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <RouteHandler/>
        <Style rules={rules}/>
      </Container>
    );
  }
};

const routes = (
  <Route path="/" handler={App}>
    <Route path="login" handler={Login}/>
    <DefaultRoute handler={Home}/>
  </Route>
);

Router.run(routes, Handler => React.render(<Handler/>, document.body));
