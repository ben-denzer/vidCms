import React            from 'react';
import {Link}           from 'react-router-dom';
import styled           from 'styled-components';
import SaveDataCheckbox from './SaveDataCheckbox';

const AuthButtons = (props) => {
    const {authErrorVal, authSubmit, formType, handleCheck} = props;
    return (
        <AuthButtonsContainer>
            <AuthButtonsTop>
                {formType === 'login' ? <Link to='/auth/forgotPassword'>Forgot Password</Link> : <div></div>}
                <SaveDataCheckbox handleCheck={() => handleCheck()} />
            </AuthButtonsTop>
            <AuthSubmitButton onClick={authSubmit}>Submit</AuthSubmitButton>
            {authErrorVal && <div className="alert alert-danger" role="alert">{authErrorVal}</div>}
        </AuthButtonsContainer>
    );
};

const AuthButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const AuthButtonsTop = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center;
    }
`;

const AuthSubmitButton = styled.button`
    margin: 20px 0;
    width: 150px;
    font-size: 18px;
    align-self: flex-end;

    @media (max-width: 600px) {
        align-self: center;
    }
`;

export default AuthButtons;