import React from 'react';
import {browserHistory} from 'react-router';

const Header = (props) => {
    return (
        <nav className="mainNav-container">
            <div className="mainNav">
                <div className="nav-item">
                    {!props.name && <a onClick={() => browserHistory.push("/auth/signup")}>Sign Up</a>}
                </div>
                <div className="nav-item">
                    {
                        !props.name ?
                            <a onClick={() => browserHistory.push("/auth/login")}>Log In</a> :
                            <a onClick={props.logout}>Log Out</a>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Header;