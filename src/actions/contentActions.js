import {apiPromise, getPublicJson, networkErrorAction} from './apiPromise';
import {CLEAR_CURRENT_VIDEO, ALL_CONTENT_SUCCESS, GET_VIDEO_SUCCESS} from '../constants/actionTypes';

const clearCurrentVideo = () => {
    return {type: CLEAR_CURRENT_VIDEO};
};

const getAllBlogs   = () => getPublicJson('public/getAllBlogs');
const getAllImages  = () => getPublicJson('public/getAllImages');
const getAllVideos  = () => getPublicJson('public/getAllVideos');

const getAllContent = () => {
    return (dispatch) => {
        Promise.all([getAllBlogs(), getAllImages(), getAllVideos()])
            .then(data => {
                const [allBlogs, allImages, allVideos] = data;
                console.log('allBlogs in actions', allBlogs);
                dispatch({
                    type: ALL_CONTENT_SUCCESS,
                    allBlogs,
                    allImages,
                    allVideos
                })
            }).catch(() => dispatch(networkErrorAction));
    }
};

const getFreeVideo = (id) => {
    return (dispatch) => {
        apiPromise({id}, 'public/getFreeVideo').then(
            video => dispatch({type: GET_VIDEO_SUCCESS, video})
        ).catch(() => dispatch(networkErrorAction));
    }
};

const getPremiumVideo = (video_id, token) => {
    return (dispatch) => {
        apiPromise({video_id, token}, 'auth/getPremiumVideo').then(
            video => dispatch({type: GET_VIDEO_SUCCESS, video}),
        ).catch(() => dispatch(networkErrorAction));
    }
}

export {clearCurrentVideo, getAllContent, getFreeVideo, getPremiumVideo};