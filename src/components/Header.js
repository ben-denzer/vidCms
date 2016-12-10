import React from 'react';
import { browserHistory } from 'react-router';
import logo from '../img/logo.png';

const Header = (props) => {
    return (
        <div>
            <nav>
                <div className="nav-wrapper-one">
                    <a className="brand-logo"><img onClick={() => browserHistory.push("/")} src={logo} alt="my logo" /></a>
                    {!props.name ?
                        <ul id="nav-mobile" className="right">
                            <li><a type="button" id="nav_login" onClick={() => browserHistory.push("/auth/login")}>Log In</a></li>
                            <li><a type="button" id="nav_signup" onClick={() => browserHistory.push("/auth/signup")}>Sign Up</a></li>
                        </ul>
                        : <ul id="nav-mobile" className="right">
                            <li><a type="button" id="nav_myaccount" onClick={() => browserHistory.push("/account")}>My Account</a></li>
                            <li><a type="button" id="nav_logout" onClick={props.logout}>Log Out</a></li>
                        </ul>
                    }
                </div>
            </nav>
            <nav>
                <div className="nav-wrapper-two">
                    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                    <ul className="center hide-on-med-and-down">
                        <li><a href="sass.html">About</a></li>
                        <li><a href="badges.html">Videos</a></li>
                        <li><a href="collapsible.html">Articles</a></li>
                        <li><a href="mobile.html">Contact</a></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="sass.html">About</a></li>
                        <li><a href="badges.html">Videos</a></li>
                        <li><a href="collapsible.html">Articles</a></li>
                        <li><a href="mobile.html">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
