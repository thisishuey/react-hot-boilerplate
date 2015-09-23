import React, { Component } from 'react';
import Radium from 'radium';
import { Link } from 'react-router';

import { Container } from '../../Components';

@Radium
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark navbar-fixed-top bg-inverse">
        <Container>
          <button className="navbar-toggler hidden-sm-up" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar2">
            &#9776;
          </button>
          <div className="collapse navbar-toggleable-xs" id="exCollapsingNavbar2">
            <Link className="navbar-brand" to="/">React Sandbox</Link>
            <ul className="nav navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home<span className="sr-only"> (current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">Profile</Link>
              </li>
            </ul>
          </div>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
