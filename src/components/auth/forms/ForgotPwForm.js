import React        from 'react';
import {Helmet}     from 'react-helmet';
import TextInput    from '../../shared/TextInput';
import {PageTitle}  from '../../../styles/share';
import {FormBox}    from '../../../styles/authFormStyles';

const ForgotPwForm = (props) => {
    const {authErrorVal, authSubmit, emailVal, handleChange} = props;
    return (
        <FormBox id="forgotPwForm">
            <Helmet>
                <title>Forgot Password | Construction To Code</title>
            </Helmet>
            <PageTitle>Forgot Password</PageTitle>
            <TextInput
                id="email"
                val={emailVal}
                handleChange={handleChange}
            />
            <div id="auth_buttons_container">
                <button onClick={authSubmit}>Submit</button>
                {authErrorVal && <div className="alert alert-danger" role="alert">{authErrorVal}</div>}
            </div>
        </FormBox>
    );
};

export default ForgotPwForm;
