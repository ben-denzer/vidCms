import {connect}                                        from 'react-redux';
import {withRouter}                                     from 'react-router-dom';
import {clearAuthError, handleTextChange, handleCheck}  from '../actions/formActions';
import {login, sendResetEmail, signup, resetPw}         from '../actions/authActions';
import AuthPage                                         from '../components/AuthPage';

const mapStateToProps = state => {
    const {authErrorVal, emailVal, passwordVal, password2Val, saveDataVal, usernameVal} = state.forms;
    return {
        authErrorVal,
        emailVal,
        message: state.message,
        passwordVal,
        password2Val,
        saveDataVal,
        user: state.user.username,
        usernameVal,
    };
};

const mapDispatchToProps = dispatch => ({
    clearAuthError:     () => dispatch(clearAuthError()),
    handleTextChange:   (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
    handleCheck:        (newVal) => dispatch(handleCheck(newVal)),
    login:              (credentials) => dispatch(login(credentials, dispatch)),
    resetPw:            (credentials, token) => dispatch(resetPw(credentials, token)),
    sendResetEmail:     (credentials) => dispatch(sendResetEmail(credentials)),
    signup:             (credentials) => dispatch(signup(credentials))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthPage));