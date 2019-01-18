import React, { Component } from 'react';
import './Header.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';

class Header extends Component {
  render() {
    return  <div className="Header">
      <div></div>
      <div className="Header-title">
          <h1>Thanakrit Pintana</h1>
          <h4>Web Developer</h4>
      </div>
      <div className="Header-navBar">
        <Navbar>
          <Navbar.Menu>
            <Navbar.Container>
              <Navbar.Item renderAs="a" href="/home">HOME</Navbar.Item>
              <Navbar.Item renderAs="a" href="/resume">RESUME</Navbar.Item>
              <Navbar.Item renderAs="a" href="/projects">PROJECTS</Navbar.Item>
              <Navbar.Item renderAs="a" href="/contact">CONTACT</Navbar.Item>
            </Navbar.Container>
          </Navbar.Menu>
        </Navbar>
      </div>
      <div></div>
    </div>

  }
}

export default Header