import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import { RouteHandler } from 'react-router';

import { Container, Navbar } from '../../Components';

import style from './style';
import rules from './rules';

require('bootstrap/scss/bootstrap.scss');
require('font-awesome/scss/font-awesome.scss');

@Radium
class Layout extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Container>
          {this.props.children}
        </Container>
        <Style rules={rules}/>
      </div>
    );
  }
}

export default Layout;
