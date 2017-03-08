import React        from 'react';
import TextInput    from '../../shared/TextInput';
import {PageTitle}  from '../../../styles/share';
import {FormBox}    from '../../../styles/authFormStyles';

const ResetForm = (props) => {
    const fields = [
        {
            id: 'username'
        }, {
            id: 'password'
        }, {
            id: 'password2',
            label: 'Re-Type Password'
        }
    ];

    const formFields = fields.map(a => {
        return (
            <TextInput
                key={a.id}
                id={a.id}
                val={props[`${a.id}Val`]}
                label={a.label}
                handleChange={props.handleChange}
            />
        );
    });

    return (
        <FormBox id="signupForm">
            <PageTitle>Reset Password</PageTitle>
            {formFields}
            <div id="auth_buttons_container">
                <button onClick={props.authSubmit}>Submit</button>
                {props.authErrorVal && <div className="alert alert-danger" role="alert">{props.authErrorVal}</div>}
            </div>
        </FormBox>
    );
};

export default ResetForm;