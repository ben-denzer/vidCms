import React from 'react';
import { browserHistory } from 'react-router';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
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
                    <NavItem eventKey={1} onClick={() => browserHistory.push('/')}>Home</NavItem>
                    <NavItem eventKey={2} onClick={() => browserHistory.push('/about')}>About</NavItem>
                    <NavItem eventKey={3} onClick={() => browserHistory.push('/videos')}>Videos</NavItem>
                    <NavItem eventKey={4} onClick={() => browserHistory.push('/articles')}>Blog</NavItem>
                    <NavItem eventKey={5} onClick={() => browserHistory.push('/contact')}>Contact</NavItem>
                    {props.name && <NavItem eventKey={6} onClick={() => browserHistory.push('/account')}>My Account</NavItem>}
                    {
                        props.name ?
                            <NavItem eventKey={7} onClick={() => props.logout()}>Log Out</NavItem> :
                            <NavItem eventKey={7} onClick={() => browserHistory.push('/auth/login')}>Log In</NavItem>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;