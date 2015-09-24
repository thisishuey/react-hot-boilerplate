import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Repos extends Component {

  render() {
    const { repos, username } = this.props;
    return (
      <div>
        <h4>Repos</h4>
        <p>Username: {username}</p>
        <p>Repos: {repos}</p>
      </div>
    );
  }

}

export default Repos;
