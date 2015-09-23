import React, { Component } from 'react';
import Radium from 'radium';
import { Container } from '../../Components';

@Radium
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <Container>
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
              <span className="icon-bar"/>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
          </div>
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
          <div id="navbar" className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
            </ul>
          </div>
        </Container>
      </nav>
    );
  }
}

export default Navbar;
