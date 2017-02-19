import * as types from '../constants/actionTypes';
import {apiPromise} from './apiPromise';

function submitComment(options, dispatch) {
    submitCommentToApi(options, dispatch);
    return {type: types.COMMENT_SUBMITTED, username: options.username, comment_text: options.comment};
}

function submitCommentToApi(options, dispatch) {
    apiPromise(options, 'auth/submitComment').then(
        () => dispatch({type: types.COMMENT_SUCCESS}),
        (err) => {
            if (err === 'unauthorized') {
                return dispatch({type: types.AUTH_ERROR, error: 'unauthorized'});
            } else {
                return dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
            }
        }
    )
}

export {
    submitComment
};