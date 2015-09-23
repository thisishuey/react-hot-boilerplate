import React, { Component } from 'react';
import Radium from 'radium';

import PageHeader from '../PageHeader';

@Radium
class Login extends Component {
  render() {
    return (
      <div>
        <PageHeader>Login</PageHeader>
      </div>
    );
  }
};

export default Login;
