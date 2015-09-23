import React, { Component } from 'react';
import Radium from 'radium';

import { PageHeader } from '../../Components';

@Radium
class Login extends Component {
  render() {
    return (
      <PageHeader>Login</PageHeader>
    );
  }
}

export default Login;
