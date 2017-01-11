import React from 'react';
import { browserHistory } from 'react-router';
import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
import logo from '../img/logo.png';
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
                    <NavItem eventKey={1} href="#">Link Right</NavItem>
                    <NavItem eventKey={2} href="#">Link Right</NavItem>
                    <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
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


    // return (
    //     <nav className="navbar navbar-default">
    //         <div className="container-fluid">
    //             <div className="navbar-header">
    //                 <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
    //                     <span className="sr-only">Toggle navigation</span>
    //                     <span className="icon-bar"></span>
    //                     <span className="icon-bar"></span>
    //                     <span className="icon-bar"></span>
    //                 </button>

    //             </div>

    //             <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    //                 <ul className="nav navbar-nav navbar-right">
    //                     <li><a onClick={() => browserHistory.push('/')}>Home</a></li>
    //                     <li><a onClick={() => browserHistory.push('/about')}>About Us</a></li>
    //                     <li><a onClick={() => browserHistory.push('/videos')}>Videos</a></li>
    //                     <li><a onClick={() => browserHistory.push('/contact')}>Contact</a></li>
    //                     {!props.name ?
    //                         <li><a id="nav_login" onClick={() => browserHistory.push("/auth/login")}>Log In</a></li> :
    //                         <li><a id="nav_myaccount" onClick={() => browserHistory.push("/account")}>My Account</a></li>
    //                     }
    //                     {!props.name ?
    //                         <li><a id="nav_signup" onClick={() => browserHistory.push("/auth/signup")}>Sign Up</a></li> :
    //                         <li><a id="nav_logout" onClick={props.logout}>Log Out</a></li>
    //                     }
    //                 </ul>
    //             </div>
    //         </div>
    //     </nav>
    // );
}

export default Header;