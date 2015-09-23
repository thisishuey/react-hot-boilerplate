import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Icon extends Component {
  render() {
    const {
      iconClass = '',
      type = 'fontAwesome',
      className = (type === 'glyphicon' ? 'glyphicon glyphicon-' : 'fa fa-' ) + iconClass
    } = this.props;
    return (
      <span className={className}/>
    );
  }
}

export default Icon;
