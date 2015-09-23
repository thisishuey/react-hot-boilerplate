import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Container extends Component {
  render() {
    return (
      <div className="container">{this.props.children}</div>
    );
  }
}

export default Container;
