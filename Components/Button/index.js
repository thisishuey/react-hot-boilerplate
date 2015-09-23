import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Button extends Component {
  render() {
    const {
      type = 'button',
      buttonClass = 'default',
      className = 'btn btn-' + buttonClass,
      children
    } = this.props;
    return (
      <button type={type} className={className}>{children}</button>
    );
  }
}

export default Button;
