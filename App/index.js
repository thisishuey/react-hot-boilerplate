import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import Router, { Route, Link, DefaultRoute, RouteHandler } from 'react-router';

import style from './style';
import rules from './rules';

import Home from './Home';
import Login from './Login';
import Container from './Container';

require('bootstrap/less/bootstrap.less');
require('font-awesome/less/font-awesome.less');

@Radium
class App extends Component {
  render() {
    return (
      <Container>
        <ul>
          <li><Link to="/home">Home</Link></li>
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
    <Route path="home" handler={Home}/>
    <Route path="login" handler={Login}/>
  </Route>
);

Router.run(routes, Handler => React.render(<Handler/>, document.body));
