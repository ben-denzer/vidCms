import React from 'react';
import {browserHistory} from 'react-router';
import logo from '../img/logo.png';

const Header = (props) => {
    return (
        <nav className="main-nav-container">
            <div className="main-nav">
                <div id="nav_logo"><img src={logo} alt="my logo" /></div>
                <div id="nav_buttons">{
                    !props.name ?
                        <div id="auth_button_group">
                            <a type="button" id="nav_login" onClick={() => browserHistory.push("/auth/login")}>Log In</a>
                            <a type="button" id="nav_signup" onClick={() => browserHistory.push("/auth/signup")}>Sign Up</a>
                        </div>
                        : <div id="auth_button_group">
                            <a type="button" id="nav_myaccount" onClick={() => browserHistory.push("auth/account")}>My Account</a>
                            <a type="button" id="nav_logout" onClick={props.logout}>Log Out</a>
                        </div>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Header;
