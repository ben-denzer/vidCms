import React            from 'react';
import {Route}          from 'react-router-dom';
import {InteriorPage}   from '../styles/share';
import LoginForm        from './auth/forms/LoginForm';
import SignupForm       from './auth/forms/SignupForm';
import ForgotPwForm     from './auth/forms/ForgotPwForm';

class AuthPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange   = this.handleChange.bind(this);
        this.handleCheck    = this.handleCheck.bind(this);
        this.authSubmit     = this.authSubmit.bind(this);
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
        const {usernameVal, passwordVal, password2Val, emailVal} = this.props;
        return (
            <InteriorPage>
                <Route exact path='/auth/login'
                    render={() => {
                        return (
                            <LoginForm
                                usernameVal={usernameVal}
                                passwordVal={passwordVal}
                                handleChange={this.handleChange}
                                authSubmit={this.authSubmit}
                                handleCheck={this.handleCheck}
                                message={this.props.message}
                            />
                        );
                    }}
                />
                <Route exact path='/auth/signup'
                    render={() => {
                        return (
                            <SignupForm
                                usernameVal={usernameVal}
                                passwordVal={passwordVal}
                                password2Val={password2Val}
                                emailVal={emailVal}
                                handleChange={this.handleChange}
                                authSubmit={this.authSubmit}
                                handleCheck={this.handleCheck}
                                message={this.props.message}
                            />
                        );
                    }}
                />
                <Route exact path='/auth/forgotPassword'
                    render={() => {
                        return (
                            <ForgotPwForm
                                emailVal={emailVal}
                                handleChange={this.handleChange}
                                authSubmit={this.authSubmit}
                                message={this.props.message}
                            />
                        );
                    }}
                />
            </InteriorPage>
        );
    }
}
export default AuthPage;