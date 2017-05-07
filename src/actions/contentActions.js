import {postToApi, getPublicJson} from './apiPromise';
import {
    ALL_CONTENT_SUCCESS,
    API_STARTED,
    AUTH_ERROR,
    CLEAR_CURRENT_VIDEO,
    COMMENT_SUBMITTED,
    COMMENT_SUCCESS,
    GET_VIDEO_SUCCESS,
    NETWORK_ERROR,
    NEW_MESSAGE
} from '../constants/actionTypes';

const clearCurrentVideo = () => ({type: CLEAR_CURRENT_VIDEO});

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

const getFreeVideo = id => {
    return dispatch => {
        getPublicJson(`public/getFreeVideo/${id}`)
            .then(video => dispatch({type: GET_VIDEO_SUCCESS, video}))
            .catch(() => dispatch({type: NETWORK_ERROR}));
    }
};

const getPremiumVideo = (video_id, token) => {
    return dispatch => {
        getPublicJson({video_id, token}, 'auth/getPremiumVideo')
            .then(video => dispatch({type: GET_VIDEO_SUCCESS, video}))
            .catch(() => dispatch({type: NETWORK_ERROR}));
    }
};

const submitCommentToApi = (options, dispatch) => {
    postToApi(options, 'auth/submitComment')
        .then(() => dispatch({type: COMMENT_SUCCESS}))
        .catch((err) => {
            if (err === 'unauthorized') {
                return dispatch({type: AUTH_ERROR, error: 'unauthorized'});
            } else {
                return dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
            }
        });
}

const submitComment = (options, dispatch) => {
    submitCommentToApi(options, dispatch);
    return {
        type: COMMENT_SUBMITTED,
        username: options.username,
        comment_text: options.comment,
        post_fk: options.post_fk
    };
};

export {
    clearCurrentVideo,
    getAllContent,
    getFreeVideo,
    getPremiumVideo,
    submitComment
};
