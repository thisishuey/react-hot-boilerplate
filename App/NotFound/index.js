import React, { Component } from 'react';
import Radium from 'radium';

import { PageHeader } from '../../Components';

@Radium
class NotFound extends Component {
  render() {
    return (
      <PageHeader>404 NOT FOUND</PageHeader>
    );
  }
}

export default NotFound;
