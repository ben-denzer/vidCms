import React from 'react';
import TextInput from '../share/TextInput';

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
        </form>
    );
};

export default ForgotPwForm;