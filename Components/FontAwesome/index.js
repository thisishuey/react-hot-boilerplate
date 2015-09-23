import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class FontAwesome extends Component {
  render() {
    const className = 'fa ' + (this.props.icon ?  ' fa-' + this.props.icon : 'fa-thumbs-o-up');
    return (
      <i className={className}/>
    );
  }
};

export default FontAwesome;
