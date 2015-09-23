import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Row extends Component {
  render() {
    return (
      <div className="row">{this.props.children}</div>
    );
  }
}

export default Row;
