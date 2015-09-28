import React, { Component } from 'react';
import Radium from 'radium';

import { PageHeader, Row, Column } from '../../Components';

import { Bio, Notes, Repos } from './partials';

@Radium
class Profile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bio: { name: 'Huey' },
      repos: [ 1, 2, 3 ],
      notes: [ 'note1', 'note2' ]
    };
  }

  render() {
    const { username } = this.props.params;
    return (
      <div>
        <PageHeader>{username} Profile</PageHeader>
        <Row>
          <Column><Bio username={username} bio={this.state.bio}/></Column>
          <Column><Repos username={username} repos={this.state.repos}/></Column>
          <Column><Notes username={username} notes={this.state.notes}/></Column>
        </Row>
      </div>
    );
  }

}

export default Profile;
