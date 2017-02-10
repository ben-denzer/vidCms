import {ADMIN_DATA_SUCCESS, NEW_MESSAGE, DELETE_COMMENTS_SUCCESS, TRASH_COMMENT} from '../constants/actionTypes';
import {apiPromise, postToApi} from './apiPromise';

const getAdminData = token => {
    return dispatch => {
        postToApi({token}, 'admin/getData')
            .then(allData => dispatch({type: ADMIN_DATA_SUCCESS, allData}))
            .catch(err => err === 'unauthorized' ?
                dispatch({type: NEW_MESSAGE, error: 'You need to be logged in to access this.'}) :
                dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
            );
    }
}

function deleteComments(token, trash, allComments) {
    return (dispatch) => {
        apiPromise({token, trash}, 'admin/deleteComments').then(
            () => dispatch({type: DELETE_COMMENTS_SUCCESS, trash, allComments}),
            (err) => err === 'unauthorized' ?
                dispatch({type: NEW_MESSAGE, error: 'You need to be logged in to access this.'}) :
                dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
        );
    };
}

function putCommentInTrash(token, comment_id, trash, comments) {
    const itemsToRemove = [...trash, comment_id];
    return (dispatch) => {
        if (window.undoTimer) {
            clearTimeout(window.undoTimer);
        }
        window.undoTimer = setTimeout(() => dispatch(deleteComments(token, itemsToRemove, comments)), 1000);
        return dispatch({type: TRASH_COMMENT, itemsToRemove});
    };
}

export {getAdminData, putCommentInTrash};