import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Column extends Component {
  render() {
    return (
      <div className="col-md-4">{this.props.children}</div>
    );
  }
}

export default Column;
