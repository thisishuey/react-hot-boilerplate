import React, { Component } from 'react';
import Radium from 'radium';

import { Button, FontAwesome, PageHeader } from '../../Components';

@Radium
class Home extends Component {
  render() {
    return (
      <div>
        <PageHeader>Hello, Huey!</PageHeader>
        <Button>
          OK Button! <FontAwesome icon="thumbs-up"/>
        </Button>
      </div>
    );
  }
}

export default Home;
