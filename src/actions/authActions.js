import {apiPromise} from './apiPromise';
import * as types from '../constants/actionTypes';
import {browserHistory} from 'react-router';
import {setMessage} from './messageActions';

const checkForToken = () => {
    return (dispatch) => {
        const token = window.localStorage.getItem('token');
        if (token) {
            apiPromise({token}, 'auth/loginWithToken').then(
                (data) => {
                    return dispatch({
                        type: types.LOGIN_SUCCESS,
                        name: data.username,
                        token: data.token,
                        premium: data.premium,
                        admin: data.admin
                    });
                },
                (err) => {
                    setMessage(dispatch);
                    dispatch({type: types.AUTH_ERROR, messageType: 'info', text: 'Session Expired'})
                }
            )
        }
    }
};

const login = (credentials) => {
    return (dispatch) => {
        const {username, password, saveData} = credentials;
        const options = {username, password};
        apiPromise(options, 'auth/login').then(
            (data) => {
                browserHistory.goBack();
                if (saveData) window.localStorage.setItem('token', data.token);
                return dispatch({
                    type: types.LOGIN_SUCCESS,
                    name: username,
                    token: data.token,
                    premium: data.premium,
                    admin: data.admin
                });
            }, (err) => {
                setMessage(dispatch);
                if (err === 'unauthorized') {
                    return dispatch({type: types.AUTH_ERROR, error: 'Invalid username or password'});
                } else {
                    return dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
                }
            }
        )
    };
};

const logout = () => {
    window.localStorage.removeItem('token');
    return {type: types.LOGOUT}
}

const resetPw = (options, tokenUrl, dispatch) => {
    const {username, password, p2} = options;
    if (password.length < 4) return dispatch({type: types.AUTH_ERROR, error: 'Password Must Be at Least 4 Characters Long'});
    if (password !== p2) return dispatch({type: types.AUTH_ERROR, error: 'Passwords Do Not Match'});
    return (dispatch) => {
        apiPromise({username, password}, `auth/reset/${tokenUrl}`).then(
            (data) => {
                return dispatch({
                    type: types.LOGIN_SUCCESS,
                    name: data.username,
                    token: data.token,
                    premium: data.premium,
                    admin: data.admin
                });
            },
            (err) => {
                setMessage(dispatch);
                if (err === 'unauthorized') {
                    return dispatch({type: types.AUTH_ERROR, error: 'Your Token Has Expired, Please Click On "Login", and "Forgot Password" again'});
                } else {
                    return dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
                }
            }
        );
    };
};

const signup = (credentials, dispatch) => {
    return (dispatch) => {
        const {username, password, p2, email, saveData, premium} = credentials;
        if (username.length < 2) return dispatch({type: types.AUTH_ERROR, error: 'Username Must Be at Least 2 Characters Long'});
        if (password.length < 4) return dispatch({type: types.AUTH_ERROR, error: 'Password Must Be at Least 4 Characters Long'});
        if (password !== p2) return dispatch({type: types.AUTH_ERROR, error: 'Passwords Do Not Match'});

        const options = {username, password, email, premium};
        apiPromise(options, 'auth/signup').then(
            (data) => {
                browserHistory.goBack();
                if (saveData) window.localStorage.setItem('token', data.token);
                return dispatch({type: types.SIGNUP_SUCCESS, name: username, token: data.token, premium});
            }, (err) => {
                setMessage(dispatch);
                if (err === 'unauthorized') {
                    return dispatch({type: types.AUTH_ERROR, error: 'Username Is Already In Use'});
                } else {
                    return dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
                }
            }
        )
    }
};

const sendResetEmail = (options, dispatch) => {
    return (dispatch) => {
        setMessage(dispatch);
        apiPromise(options, 'auth/resetPassword').then(
            () => {
                setMessage(dispatch);
                browserHistory.push('/')
                dispatch({type: types.EMAIL_SUCCESS})
            },
            (err) => {
                setMessage(dispatch);
                dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
            }
        );
    };
};

export {checkForToken, login, logout, resetPw, sendResetEmail, signup};