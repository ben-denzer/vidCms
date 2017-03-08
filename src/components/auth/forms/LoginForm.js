import React        from 'react';
import TextInput    from '../../shared/TextInput';
import AuthButtons  from '../AuthButtons';
import {PageTitle}  from '../../../styles/share';
import {FormBox}    from '../../../styles/authFormStyles';

const LoginForm = (props) => {
    return (
        <FormBox id="loginForm">
            <PageTitle>Log In</PageTitle>
            <TextInput
                id="username"
                val={props.usernameVal}
                handleChange={props.handleChange}
            />
            <TextInput
                id="password"
                val={props.passwordVal}
                handleChange={props.handleChange}
            />
            <AuthButtons
                authErrorVal={props.authErrorVal}
                formType="login"
                handleCheck={props.handleCheck}
                authSubmit={props.authSubmit}
            />
        </FormBox>
    );
};

export default LoginForm;