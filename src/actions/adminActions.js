import {ADMIN_DATA_SUCCESS, BANNED_USER, NEW_MESSAGE, DELETE_COMMENTS_SUCCESS} from '../constants/actionTypes';
import {apiPromise, postToApi} from './apiPromise';

const banUser = (options) => {
    return (dispatch) => {
        postToApi(options, 'admin/banUser')
            .then(bannedUser => dispatch({type: BANNED_USER, bannedUser}))
            .catch(err => err === 'unauthorized' ?
                dispatch({type: NEW_MESSAGE, error: 'You need to be logged in to access this.'}) :
                dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
            );
    }
};

const deleteComments = (options) => {
    // Takes an array as the trash param
    const {token, trash} = options;
    return (dispatch) => {
        apiPromise({token, trash}, 'admin/deleteComments').then(
            () => dispatch({type: DELETE_COMMENTS_SUCCESS, trash}),
            (err) => err === 'unauthorized' ?
                dispatch({type: NEW_MESSAGE, error: 'You need to be logged in to access this.'}) :
                dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
        );
    };
}

const getAdminData = (token) => {
    return (dispatch) => {
        postToApi({token}, 'admin/getData')
            .then(adminData => {
                dispatch({type: ADMIN_DATA_SUCCESS, adminData})
            }).catch(err => err === 'unauthorized' ?
                dispatch({type: NEW_MESSAGE, error: 'You need to be logged in to access this.'}) :
                dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
            );
    }
}

export {banUser, getAdminData, deleteComments};