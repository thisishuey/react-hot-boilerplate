import React, { Component } from 'react';
import Radium from 'radium';

@Radium
class Notes extends Component {

  render() {
    const { notes, username } = this.props;
    return (
      <div>
        <h4>Notes</h4>
        <p>Username: {username}</p>
        <p>Notes: {notes}</p>
      </div>
    );
  }

}

export default Notes;
