import React from 'react';
import TextInput from './TextInput';

const SignupForm = (props) => {
    return (
        <form className="formBox" id="signupForm">
            <h1>Sign Up</h1>
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
            <TextInput
                id="password2"
                type="password"
                label="Re-Type Password"
                val={props.password2Val}
                handleChange={props.handleChange}
            />
            <TextInput
                id="email"
                type="email"
                label="Email - ONLY used if you forget your password"
                val={props.emailVal}
                handleChange={props.handleChange}
            />
        </form>
    );
};

export default SignupForm;