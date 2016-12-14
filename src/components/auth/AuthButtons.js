import React from 'react';
import {browserHistory} from 'react-router';
import SaveDataCheckbox from './SaveDataCheckbox';
import MessageBox from '../share/MessageBox';

const AuthButtons = (props) => {
    return (
        <div id="auth_buttons_container">
            <div id="auth_buttons_top">
                {props.formType === 'login' ? <a onClick={() => browserHistory.push('/auth/forgotPw')}>Forgot Password</a> : <div></div>}
                <SaveDataCheckbox handleCheck={() => props.handleCheck()} />
            </div>
            <button onClick={props.authSubmit}>Submit</button>
            <MessageBox message={props.message} />
        </div>
    );
};

export default AuthButtons;