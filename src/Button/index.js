import React, { Component } from 'react';
import Radium from 'radium';

@Radium
export default class Button extends Component {
  render() {
    return (
      <button className="btn btn-success">
        {this.props.children}
      </button>
    );
  }
};
