import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {handleTextChange, handleCheck} from '../actions/formActions';
import {login, sendResetEmail, signup, resetPw} from '../actions/authActions';
import AuthPage from '../components/AuthPage';

const mapStateToProps = state => {
    const {usernameVal, passwordVal, password2Val, emailVal, saveDataVal, authErrorVal} = state.forms;
    return {
        user: state.user.name,
        message: state.message,
        usernameVal,
        passwordVal,
        password2Val,
        emailVal,
        saveDataVal,
        authErrorVal,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        handleTextChange:   (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        handleCheck:        (newVal) => dispatch(handleCheck(newVal)),
        login:              (credentials) => dispatch(login(credentials, dispatch)),
        resetPw:            (credentials, token) => dispatch(resetPw(credentials, token, dispatch)),
        sendResetEmail:     (credentials) => dispatch(sendResetEmail(credentials, dispatch)),
        signup:             (credentials) => dispatch(signup(credentials, dispatch))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthPage));