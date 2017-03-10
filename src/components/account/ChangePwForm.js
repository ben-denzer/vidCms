import React        from 'react';
import TextInput    from '../shared/TextInput';
import {PageTitle}  from '../../styles/share';
import {FormBox}    from '../../styles/authFormStyles';

const ChangePwForm = (props) => {
    const fields = [
        {
            id: 'oldPassword',
            label: 'Current Password'
        }, {
            id: 'password',
            label: 'New Password'
        }, {
            id: 'password2',
            label: 'Re-Type New Password'
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

    if (props.oldPasswordVal) console.log(props.oldPasswordVal);

    return (
        <FormBox id="signupForm">
            <PageTitle>Change Password</PageTitle>
            {formFields}
            <div id="auth_buttons_container">
                <button onClick={props.authSubmit}>Submit</button>
                {props.authErrorVal && <div className="alert alert-danger" role="alert">{props.authErrorVal}</div>}
            </div>
        </FormBox>
    );
};

export default ChangePwForm;