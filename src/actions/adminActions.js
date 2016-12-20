//import {ADMIN_DATA_SUCCESS, AUTH_ERROR, NEW_MESSAGE} from '../constants/actionTypes';
import * as types from '../constants/actionTypes';
import {apiPromise} from './apiPromise';

const getAdminData = (token, dispatch) => {
    return (dispatch) => {
        apiPromise({token}, 'admin/getData').then(
            (allData) => {
                return dispatch({type: types.ADMIN_DATA_SUCCESS, allData})
            },
            (err) => {
                if (err === 'unauthorized') {
                    return dispatch({type: types.NEW_MESSAGE, error: 'You need to be logged in to access this.'});
                } else {
                    return dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
                }
            }
        )
    }
}

function deleteComments(token, trash) {
    return (dispatch) => {
        apiPromise({token, trash}, '/admin/deleteComments').then(
            () => {
                dispatch({type: types.DELETE_ITEMS, trash});
            },
            (err) => {
                if (err === 'unauthorized') {
                    return dispatch({type: types.NEW_MESSAGE, error: 'You need to be logged in to access this.'});
                } else {
                    return dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
                }
            }
        );
    };
}

function putCommentInTrash(token, comment_id, trash) {
    const itemsToRemove = [...trash, comment_id];
    return (dispatch) => {
        if (window.undoTimer) {
            clearTimeout(window.undoTimer);
        }
        window.undoTimer = setTimeout(() => dispatch(deleteComments(token, itemsToRemove)), 7000);
        return dispatch({type: types.TRASH_COMMENT, itemsToRemove});
    };
}

export {getAdminData, putCommentInTrash};