import React        from 'react';
import {Link}       from 'react-router-dom';
import styled       from 'styled-components';
import {Navbar}     from 'react-bootstrap';
import headerImg    from '../../img/header-bg.jpg';

const MyNav = (props) => {
    return (
        <Header>
            <AboveNav></AboveNav>
            <Navbar inverse collapseOnSelect fluid>
                <Navbar.Collapse>
                    <ul className="nav navbar-nav navbar-right">
                        <li role="presentation"><Link to='/'>Home</Link></li>
                        <li role="presentation"><Link to='/about'>About</Link></li>
                        <li role="presentation"><Link to='/videos'>Videos</Link></li>
                        <li role="presentation"><Link to='/blog'>Blog</Link></li>
                        <li role="presentation"><Link to='/contact'>Contact</Link></li>
                        {
                            props.username ?
                                <li role="presentation"><Link to='/account'>My Account</Link></li> :
                                <li role="presentation"><Link to='/auth/login'>Log In</Link></li>
                        }
                        {
                            props.username ?
                                <li role="presentation"><a onClick={() => props.logout()}>Log Out</a></li> :
                                <li role="presentation"><Link to='/auth/signup'>Sign Up</Link></li>
                        }
                    </ul>
                </Navbar.Collapse>
            </Navbar>
        </Header>
    );
};

const Header = styled.header``;
const AboveNav = styled.div`
    height: 100px;
    background-image: url("${headerImg}");
    background-size: cover;
`;

export default MyNav;