import React from 'react';
// import { browserHistory } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import styles from '../styles/navStyles';

const Header = (props) => {
    return (
        <Navbar style={styles.navbar} inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand style={styles.brand}>
                    <h1 style={styles.h1}>Ben Denzer</h1>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav style={styles.navUl} pullRight>
                    <NavItem eventKey={1}>RESUME</NavItem>
                    <NavDropdown eventKey={3} title="PROJECTS" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;