import {apiPromise, getPublicJson} from './apiPromise';
import {
    CLEAR_CURRENT_VIDEO,
    COMMENT_SUBMITTED,
    COMMENT_SUCCESS,
    ALL_CONTENT_SUCCESS,
    GET_VIDEO_SUCCESS,
    API_STARTED,
    NETWORK_ERROR,
    AUTH_ERROR,
    NEW_MESSAGE
} from '../constants/actionTypes';

const clearCurrentVideo = () => {
    return {type: CLEAR_CURRENT_VIDEO};
};

const getAllBlogs       = () => getPublicJson('public/getAllBlogs');
const getAllComments    = () => getPublicJson('public/getAllComments');
const getAllImages      = () => getPublicJson('public/getAllImages');
const getAllVideos      = () => getPublicJson('public/getAllVideos');

const getAllContent = () => {
    return (dispatch) => {
        dispatch({type: API_STARTED});
        Promise.all([getAllBlogs(), getAllComments(), getAllImages(), getAllVideos()])
            .then(data => {
                const [allBlogs, allComments, allImages, allVideos] = data;
                dispatch({
                    type: ALL_CONTENT_SUCCESS,
                    allBlogs,
                    allComments,
                    allImages,
                    allVideos
                })
            }).catch(() => dispatch({type: NETWORK_ERROR}))
    }
};

const getFreeVideo = (id) => {
    return (dispatch) => {
        apiPromise({id}, 'public/getFreeVideo').then(
            video => dispatch({type: GET_VIDEO_SUCCESS, video})
        ).catch(() => dispatch({type: NETWORK_ERROR}));
    }
};

const getPremiumVideo = (video_id, token) => {
    return (dispatch) => {
        apiPromise({video_id, token}, 'auth/getPremiumVideo').then(
            video => dispatch({type: GET_VIDEO_SUCCESS, video}),
        ).catch(() => dispatch({type: NETWORK_ERROR}));
    }
}

function submitComment(options, dispatch) {
    submitCommentToApi(options, dispatch);
    return {
        type: COMMENT_SUBMITTED,
        username: options.username,
        comment_text: options.comment, 
        post_fk: options.post_fk
    };
}

function submitCommentToApi(options, dispatch) {
    apiPromise(options, 'auth/submitComment').then(
        () => dispatch({type: COMMENT_SUCCESS}),
        (err) => {
            if (err === 'unauthorized') {
                return dispatch({type: AUTH_ERROR, error: 'unauthorized'});
            } else {
                return dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
            }
        }
    )
}

export {clearCurrentVideo, getAllContent, getFreeVideo, getPremiumVideo, submitComment};