import React, { Component } from 'react';
import Radium from 'radium';

import { PageHeader, Row, Column } from '../../Components';

@Radium
class Profiles extends Component {

  render() {
    return (
      <div>
        <PageHeader>User Profiles</PageHeader>
      </div>
    );
  }

}

export default Profiles;
