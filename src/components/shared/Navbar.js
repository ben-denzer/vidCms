import React        from 'react';
import {Link}       from 'react-router-dom';
import styled       from 'styled-components';
import {Navbar}     from 'react-bootstrap';
import headerImg    from '../../img/header-bg.jpg';

const MyNav = (props) => {
    return (
        <Header>
            <AboveNav>
                <LogoH1>Construction 2 Code</LogoH1>
            </AboveNav>
            <Navbar inverse collapseOnSelect fluid>
                <Navbar.Toggle />
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
                                <li role="presentation"><Link onClick={() => props.logout()}>Log Out</Link></li> :
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
    display: flex;
    align-items: flex-start;
`;

const LogoH1 = styled.h1`
    font-size: 82px;
    font-family: 'Indie Flower', cursive;
    font-weight: bold;
    text-align: center;
    margin-left: 20px;
    color: #bb0000;
    text-shadow: 4px 3px 3px #333;

    @media (max-width: 650px) {
        font-size: 40px;
        margin: 0;
        width: 100%;
        text-align: center;
    }
`;

export default MyNav;
