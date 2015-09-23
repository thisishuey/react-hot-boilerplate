import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class FontAwesome extends Component {
  render() {
    const {
      icon = '',
      type = 'fontAwesome',
      className = (type === 'glyphicon' ? 'glyphicon glyphicon-' : 'fa fa-' ) + icon
    } = this.props;
    return (
      <span className={className}/>
    );
  }
}

export default FontAwesome;
