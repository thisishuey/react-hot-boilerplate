import React, { Component } from 'react';
import Radium from 'radium';

import PageHeader from '../PageHeader';
import Button from '../Button';
import FontAwesome from '../FontAwesome';

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
};

export default Home;
