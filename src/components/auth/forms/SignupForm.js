import React        from 'react';
import TextInput    from '../../shared/TextInput';
import AuthButtons  from '../AuthButtons';
import {PageTitle}  from '../../../styles/share';
import {FormBox}    from '../../../styles/authFormStyles';

const SignupForm = (props) => {
    const inputs = [
        {id: 'username'},
        {id: 'password'},
        {id: 'password2', label: 'Re-Type Password'},
        {id: 'email'}
    ];

    const textInputs = inputs.map(a => {
        return (
            <TextInput
                key={a.id}
                id={a.id}
                val={props[`${a.id}Val`]}
                label={a.label || ''}
                handleChange={props.handleChange}
            />
        );
    });

    return (
        <FormBox id="signupForm">
            <PageTitle>Sign Up</PageTitle>
            {textInputs}
            <AuthButtons
                formType="signup"
                handleCheck={props.handleCheck}
                authSubmit={props.authSubmit}
                authErrorVal={props.authErrorVal}
            />
        </FormBox>
    );
};

export default SignupForm;