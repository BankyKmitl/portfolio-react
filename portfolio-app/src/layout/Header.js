import React, { Component } from 'react';
import './Header.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Navbar } from 'react-bulma-components';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <div></div>
                <div className="Header-title">
                    <h1>{this.props.name}</h1>
                    <h4>{this.props.job}</h4>
                </div>
                <div className="Header-navBar">
                <Navbar>
                    <Navbar.Menu>
                    <Navbar.Container>
                        <Navbar.Item active="true">
                            <NavLink exact to="/" activeClassName="selected">HOME</NavLink>
                        </Navbar.Item>
                        <Navbar.Item>
                            <NavLink to="/resume" activeClassName="selected">RESUME</NavLink>
                        </Navbar.Item>
                        <Navbar.Item>
                            <NavLink to="/projects" activeClassName="selected">PROJECTS</NavLink>
                        </Navbar.Item>
                        <Navbar.Item>
                            <NavLink to="/contact" activeClassName="selected">CONTACT</NavLink>
                        </Navbar.Item>
                    </Navbar.Container>
                    </Navbar.Menu>
                </Navbar>
                </div>
                <div></div>
            </div>
        )
    }
}

export default Header