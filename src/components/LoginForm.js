import React from 'react';
import TextInput from './TextInput';
import {browserHistory} from 'react-router';

const LoginForm = (props) => {
    return (
        <form className="formBox" id="loginForm">
            <h1>Log In</h1>
            <TextInput
                id="username"
                val={props.usernameVal}
                handleChange={props.handleChange}
            />
            <TextInput
                id="password"
                type="password"
                val={props.passwordVal}
                handleChange={props.handleChange}
            />
            <a onClick={() => browserHistory.push('/auth/forgotPw')}>Forgot Password</a>
        </form>
    );
};

export default LoginForm;