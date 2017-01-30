import React from 'react';
import AuthButtons from './AuthButtons';

const BaseAuthForm = (FormFields) => {
    return class extends React.Component {
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
            return (
                <div>
                    <FormFields name={"Bob"} {...this.props} />
                    <AuthButtons handleCheck={this.handleCheck} authSubmit={this.authSubmit} message={this.props.message} />
                </div>
            );
        }
    }
};

export default BaseAuthForm;