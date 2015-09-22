import React, { Component } from 'react';
import Radium from 'radium';
import style from './style';

@Radium
export default class Button extends Component {
  render() {
    return (
      <button style={style.base}>
        {this.props.children}
      </button>
    );
  }
};
