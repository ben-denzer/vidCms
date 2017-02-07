import React        from 'react';
import TextInput    from '../../shared/TextInput';
import MessageBox   from '../../shared/MessageBox';
import {PageTitle}  from '../../../styles/share';
import {FormBox}    from '../../../styles/authFormStyles';

const ForgotPwForm = (props) => {
    return (
        <FormBox id="forgotPwForm">
            <PageTitle>Forgot Password</PageTitle>
            <TextInput
                id="email"
                val={props.emailVal}
                handleChange={props.handleChange}
            />
            <div id="auth_buttons_container">
                <button onClick={props.authSubmit}>Submit</button>
                <MessageBox message={props.message} />
            </div>
        </FormBox>
    );
};

export default ForgotPwForm;