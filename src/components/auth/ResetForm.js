import React from 'react';
import TextInput from '../share/TextInput';

const ResetForm = (props) => {
    return (
        <div>
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
        </div>
    );
};

export default ResetForm;