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

Notes.propTypes = {
  notes: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired
};

export default Notes;
