import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { RouteHandler } from 'react-router';

import { Container, Navbar } from '../../Components';

import style from './style';
import rules from './rules';

require('bootstrap/less/bootstrap.less');
require('font-awesome/less/font-awesome.less');

@Radium
class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Container>
          <RouteHandler/>
        </Container>
        <Style rules={rules}/>
      </div>
    );
  }
}

export default Layout;
