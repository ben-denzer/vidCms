import React        from 'react';
import TextInput    from '../../shared/TextInput';
import MessageBox   from '../../shared/MessageBox';
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
                <MessageBox message={props.message} />
            </div>
        </FormBox>
    );
};

export default ResetForm;