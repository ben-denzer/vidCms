import {apiPromise, postToApi} from './apiPromise';
import {
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGOUT,
    NEW_MESSAGE,
    SIGNUP_SUCCESS,
    EMAIL_SUCCESS
} from '../constants/actionTypes';

const authErrorAction = (err, dispatch, signup) => {
    // Only sending error message if unauthorized
    if (err) {
        signup ?
            dispatch({type: AUTH_ERROR, error: 'Username is taken. Please try again.'}) :
            dispatch({type: AUTH_ERROR, error: 'Invalid username or password'});
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

const login = credentials => {
    return dispatch => {
        const {username, password, saveData} = credentials;
        const options = {username, password};
        postToApi(options, 'auth/login')
            .then(data => {
                const {token, premium, admin} = data;
                if (saveData) window.localStorage.setItem('token', data.token);
                dispatch({type: LOGIN_SUCCESS, username, token, premium, admin});
            }).catch(err => authErrorAction(err, dispatch));
    };
};

const logout = () => {
    console.log('logout called');
    window.localStorage.removeItem('token');
    return {type: LOGOUT}
}

const resetPw = (options, tokenUrl, dispatch) => {
    const {username, password, p2} = options;
    if (password.length < 4) return dispatch({type: AUTH_ERROR, error: 'Password Must Be at Least 4 Characters Long'});
    if (password !== p2) return dispatch({type: AUTH_ERROR, error: 'Passwords Do Not Match'});
    return (dispatch) => {
        apiPromise({username, password}, `auth/reset/${tokenUrl}`).then(
            (data) => {
                return dispatch({
                    type: LOGIN_SUCCESS,
                    name: data.username,
                    token: data.token,
                    premium: data.premium,
                    admin: data.admin
                });
            },
            (err) => {
                if (err === 'unauthorized') {
                    return dispatch({type: AUTH_ERROR, error: 'Your Token Has Expired, Please Click On "Login", and "Forgot Password" again'});
                } else {
                    return dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
                }
            }
        );
    };
};

const sendResetEmail = (options, dispatch) => {
    return (dispatch) => {
        postToApi(options, 'auth/resetPassword')
            .then(() => dispatch({type: EMAIL_SUCCESS}))
            .catch(() => dispatch({
                type: NEW_MESSAGE,
                messageType: 'error',
                text: 'Network Error, Please Try Again'
            }));
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
                const {token} = data;
                if (saveData) window.localStorage.setItem('token', token);
                dispatch({type: SIGNUP_SUCCESS, username, token, premium});
            }).catch(err => authErrorAction(err, dispatch, 'signup'));
    }
};

export {checkForToken, login, logout, resetPw, sendResetEmail, signup};