import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class PageHeader extends Component {
  render() {
    return (
      <h1>{this.props.children}</h1>
    );
  }
}

export default PageHeader;
