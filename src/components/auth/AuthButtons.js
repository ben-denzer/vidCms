import React from 'react';
import {browserHistory} from 'react-router';
import SaveDataCheckbox from './SaveDataCheckbox';

const AuthButtons = (props) => {
    return (
        <div id="auth_buttons_container">
            <div id="auth_buttons_top">
                <a onClick={() => browserHistory.push('/auth/forgotPw')}>Forgot Password</a>
                <SaveDataCheckbox handleCheck={() => props.handleCheck()} />
            </div>
            <button onClick={props.authSubmit}>Submit</button>
        </div>
    );
};

export default AuthButtons;