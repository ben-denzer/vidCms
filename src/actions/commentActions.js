import * as types from '../constants/actionTypes';
import {apiPromise} from './apiPromise';

function getComments(video_id, dispatch) {
    return () => {
        apiPromise({video_id}, 'public/getComments').then(
            (comments) => dispatch({type: types.GET_COMMENTS_SUCCESS, comments}),
            (err) => {
                if (err === 'unauthorized') {
                    return dispatch({type: types.AUTH_ERROR, error: 'unauthorized'});
                } else {
                    return dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
                }
            }
        )
    }
}

function submitComment(options, dispatch) {
    submitCommentToApi(options, dispatch);
    return {type: types.COMMENT_SUBMITTED, username: options.name, comment_text: options.comment};
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
    submitComment,
    getComments
};