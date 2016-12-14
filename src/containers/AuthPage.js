import React, {Component} from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {handleTextChange, handleCheck} from '../actions/formActions';
import {login, sendResetEmail, signup, resetPw} from '../actions/authActions';

class AuthPage extends Component {
    constructor(props) {
        super(props);
        this.handleChange   = this.handleChange.bind(this);
        this.handleCheck    = this.handleCheck.bind(this);
        this.authSubmit     = this.authSubmit.bind(this);
    }
    componentDidUpdate() {
        if (this.props.user) browserHistory.push('/');
    }
    handleChange(e) {
        this.props.handleTextChange(e.target.id, e.target.value);
    }
    handleCheck(e) {
        this.props.handleCheck(!this.props.saveDataVal);
    }
    authSubmit(e) {
        e.preventDefault();
        const {
            usernameVal,
            passwordVal,
            password2Val,
            saveDataVal,
            emailVal,
            location,
            sendResetEmail,
            signup,
            login,
            resetPw
        } = this.props;

        const path = location.pathname;

        switch(true) {
            case path.includes('signup'):
                return signup({
                    username:   usernameVal,
                    password:   passwordVal,
                    p2:         password2Val,
                    email:      emailVal,
                    saveData:   saveDataVal,
                    premium:    false
                });
            case path.includes('login'):
                return login({
                    username:   usernameVal,
                    password:   passwordVal,
                    saveData:   saveDataVal
                });
            case path.includes('forgotPw'):
                return sendResetEmail({email: emailVal}, );
            case path.includes('reset'):
                const token = path.slice(12);
                return resetPw(
                    {
                        username:  usernameVal,
                        password:  passwordVal,
                        p2:        password2Val
                    },
                    token
                );
            default:
                console.log('something is wrong in switch');
        }
    }
    render() {
        const {user, usernameVal, passwordVal, password2Val, saveDataVal, authErrorVal, message} = this.props;
        return (
            <div id="auth_page">
                {user || ''}
                <div id="authError">{authErrorVal || ''}</div>
                {this.props.children && React.cloneElement(
                    this.props.children,
                    {
                        handleChange:   this.handleChange,
                        handleCheck:    this.handleCheck,
                        authSubmit:     this.authSubmit,
                        usernameVal,
                        passwordVal,
                        password2Val,
                        saveDataVal,
                        message
                    }
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
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

const mapDispatchToProps = (dispatch) => {
    return {
        handleTextChange:   (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        handleCheck:        (newVal) => dispatch(handleCheck(newVal)),
        login:              (credentials) => dispatch(login(credentials, dispatch)),
        resetPw:            (credentials, token) => dispatch(resetPw(credentials, token, dispatch)),
        sendResetEmail:     (credentials) => dispatch(sendResetEmail(credentials, dispatch)),
        signup:             (credentials) => dispatch(signup(credentials, dispatch))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
