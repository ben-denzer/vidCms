import React from 'react';
import TextInput from '../share/TextInput';
import MessageBox from '../share/MessageBox';

const ResetForm = (props) => {
    return (
        <form className="formBox" id="signupForm">
            <h1>Reset Password</h1>
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
            <div id="auth_buttons_container">
                <button onClick={props.authSubmit}>Submit</button>
                <MessageBox message={props.message} />
            </div>
        </form>
    );
};

export default ResetForm;