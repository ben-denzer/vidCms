import * as types from '../constants/actionTypes';
import {apiPromise} from './apiPromise';

function getBlogComments(blog_post_url, dispatch) {
    return () => {
        apiPromise({blog_post_url}, 'public/getBlogComments').then(
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

function getVideoComments(video_id, dispatch) {
    return () => {
        apiPromise({video_id}, 'public/getVideoComments').then(
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
    submitComment,
    getBlogComments,
    getVideoComments
};