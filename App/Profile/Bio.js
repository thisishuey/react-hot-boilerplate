import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Bio extends Component {

  render() {
    const { bio, username } = this.props;
    return (
      <div>
        <h4>User Profile</h4>
        <p>Username: {username}</p>
        <p>Bio: {bio}</p>
      </div>
    );
  }

}

Bio.propTypes = {
  bio: React.PropTypes.object.isRequired,
  username: React.PropTypes.string.isRequired
};

export default Bio;
