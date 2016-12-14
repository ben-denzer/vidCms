import React from 'react';
import TextInput from '../share/TextInput';
import MessageBox from '../share/MessageBox';

const ForgotPwForm = (props) => {
    return (
        <form className="formBox" id="forgotPwForm">
            <h1>Forgot Password</h1>
            <TextInput
                id="email"
                type="email"
                label="Email"
                val={props.emailVal}
                handleChange={props.handleChange}
            />
            <div id="auth_buttons_container">
                <button onClick={props.authSubmit}>Submit</button>
                <MessageBox message={props.message} />
            </div>
        </form>
    );
};

export default ForgotPwForm;