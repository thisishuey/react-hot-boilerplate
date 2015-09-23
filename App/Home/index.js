import React, { Component } from 'react';
import Radium from 'radium';

import { Button, Icon, PageHeader } from '../../Components';

@Radium
class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader>Hello, Huey!</PageHeader>
        <Button>
          Font Awesome Button! <Icon/>
        </Button>
        <Button>
          Glyphicon Button! <Icon type="glyphicon"/>
        </Button>
      </div>
    );
  }
}

export default Home;
