import {postToApi} from './apiPromise';
import {
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT,
    NEW_MESSAGE,
    SIGNUP_SUCCESS,
    EMAIL_SUCCESS
} from '../constants/actionTypes';

const authErrorAction = (err, dispatch, formName) => {
    // Only sending error message if unauthorized
    if (err) {
        let error;
        if (formName === 'signup') {
            error = 'Username is taken. Please try again.';
        } else if (formName === 'reset') {
            error = 'Your Token Has Expired, Please Click On "Login", and "Forgot Password" again';
        } else {  // login error
            error = 'Invalid username or password';
        }
        dispatch({type: AUTH_ERROR, error});
    } else {
        return dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
    }
};

const checkForToken = () => {
    return dispatch => {
        const token = window.localStorage.getItem('token');
        if (token) {
            postToApi({token}, 'auth/loginWithToken')
                .then(data => {
                    const {username, token, premium, admin} = data;
                    dispatch({type: LOGIN_SUCCESS, username, token, premium, admin});
                }).catch(() => dispatch({type: AUTH_ERROR, messageType: 'info', text: 'Session Expired'}));
        }
    }
};

const login = (credentials) => {
    return dispatch => {
        const {username, password, saveData} = credentials;
        const options = {username, password};
        postToApi(options, 'auth/login')
            .then(data => {
                const {token, userData} = data;
                if (saveData) window.localStorage.setItem('token', data.token);
                dispatch({type: LOGIN_SUCCESS, userData, token, admin: userData.admin});
            }).catch(err => authErrorAction(err, dispatch, 'login'));
    };
};

const logout = () => {
    window.localStorage.removeItem('token');
    return {type: LOGOUT}
};

const resetPw = (credentials, tokenUrl) => {
    const {username, password, p2} = credentials;
    if (password.length < 4) return {type: AUTH_ERROR, error: 'Password Must Be at Least 4 Characters Long'};
    if (password !== p2) return {type: AUTH_ERROR, error: 'Passwords Do Not Match'};

    const options = {username, password};
    return (dispatch) => {
        postToApi(options, `auth/reset/${tokenUrl}`)
            .then(
                (data) => {
                    const {token, premium, admin} = data;
                    return dispatch({
                        type: LOGIN_SUCCESS,
                        username,
                        token,
                        premium,
                        admin
                    });
                }
            ).catch((err) => authErrorAction(err, dispatch, 'reset'));
    };
};

const sendResetEmail = (options) => {
    return (dispatch) => {
        postToApi(options, 'auth/resetPassword')
            .then(() => dispatch({type: EMAIL_SUCCESS}))
            .catch(() => authErrorAction(null, dispatch));
    };
};

const signup = credentials => {
    return (dispatch) => {
        const {username, password, p2, email, saveData, premium} = credentials;
        if (username.length < 2) return dispatch({type: AUTH_ERROR, error: 'Username Must Be at Least 2 Characters Long'});
        if (password.length < 4) return dispatch({type: AUTH_ERROR, error: 'Password Must Be at Least 4 Characters Long'});
        if (password !== p2) return dispatch({type: AUTH_ERROR, error: 'Passwords Do Not Match'});

        const options = {username, password, email, premium};
        postToApi(options, 'auth/signup')
            .then(data => {
                const {token, userData} = data;
                if (saveData) window.localStorage.setItem('token', token);
                dispatch({type: SIGNUP_SUCCESS, userData, token});
            }).catch(err => authErrorAction(err, dispatch, 'signup'));
    }
};

export {checkForToken, login, logout, resetPw, sendResetEmail, signup};