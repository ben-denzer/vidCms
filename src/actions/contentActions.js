import {apiPromise, getPublicJson} from './apiPromise';
import {
    CLEAR_CURRENT_VIDEO,
    ALL_CONTENT_SUCCESS,
    GET_VIDEO_SUCCESS,
    API_STARTED,
    NETWORK_ERROR
} from '../constants/actionTypes';

const clearCurrentVideo = () => {
    return {type: CLEAR_CURRENT_VIDEO};
};

const getAllBlogs   = () => getPublicJson('public/getAllBlogs');
const getAllImages  = () => getPublicJson('public/getAllImages');
const getAllVideos  = () => getPublicJson('public/getAllVideos');

const getAllContent = () => {
    return (dispatch) => {
        dispatch({type: API_STARTED});
        Promise.all([getAllBlogs(), getAllImages(), getAllVideos()])
            .then(data => {
                const [allBlogs, allImages, allVideos] = data;
                dispatch({
                    type: ALL_CONTENT_SUCCESS,
                    allBlogs,
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

export {clearCurrentVideo, getAllContent, getFreeVideo, getPremiumVideo};