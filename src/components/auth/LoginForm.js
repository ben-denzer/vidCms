import React from 'react';
import TextInput from '../share/TextInput';
import AuthButtons from './AuthButtons';

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
            <AuthButtons handleCheck={props.handleCheck} authSubmit={props.authSubmit} />
        </form>
    );
};

export default LoginForm;