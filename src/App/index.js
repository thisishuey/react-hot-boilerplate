import React, { Component } from 'react';
import Radium, { Style } from 'radium';
import style from './style';
import rules from './rules';

import Button from '../Button';

@Radium
export default class App extends Component {
  render() {
    return (
      <div>
        <h1 style={style.base}>
          Hello, world.
        </h1>
        <Button>OK Button!</Button>
        <Style rules={rules}/>
      </div>
    );
  }
};
