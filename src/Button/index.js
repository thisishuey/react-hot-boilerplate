import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Button extends Component {
  render() {
    const className = 'btn ' + (this.props.type ? ('btn-' + this.props.type) : 'btn-default');
    return (
      <button className={className}>{this.props.children}</button>
    );
  }
};

export default Button;
