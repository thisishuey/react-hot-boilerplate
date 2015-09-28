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

Repos.propTypes = {
  repos: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired
};

export default Repos;
