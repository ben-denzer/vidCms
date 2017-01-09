import * as types from '../constants/actionTypes';
import {apiPromise} from './apiPromise';

const clearCurrentVideo = () => {
    return {type: types.CLEAR_CURRENT_VIDEO};
};

const getAllBlogs = () => {
    return (dispatch) => {
        apiPromise({}, 'public/getAllBlogs').then(
            (allBlogs) => dispatch({type: types.ALL_BLOGS_SUCCESS, allBlogs}),
            () => dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
        );
    }
};

const getAllImages = () => {
    return (dispatch) => {
        apiPromise({}, 'public/getAllImages').then(
            (allImages) => dispatch({type: types.ALL_IMAGES_SUCCESS, allImages}),
            () => dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
        );
    }
};

const getAllVideos = () => {
    return (dispatch) => {
        apiPromise({}, 'public/getAllVideos').then(
            (allVideos) => dispatch({type: types.ALL_VIDEOS_SUCCESS, allVideos}),
            () => dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
        );
    }
};

const getAllContent = () => {
    return (dispatch) => {
        dispatch(getAllBlogs());
        dispatch(getAllImages());
        dispatch(getAllVideos());
    }
};

const getFreeVideo = (id, dispatch) => {
    return () => {
        apiPromise({id}, 'public/getFreeVideo').then(
            (video) => dispatch({type: types.GET_VIDEO_SUCCESS, video}),
            () => dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
        );
    }
};

const getPremiumVideo = (video_id, token, dispatch) => {
    return () => {
        apiPromise({video_id, token}, 'auth/getPremiumVideo').then(
            (video) => dispatch({type: types.GET_VIDEO_SUCCESS, video}),
            () => dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
        );
    }
}

export {clearCurrentVideo, getAllContent, getFreeVideo, getPremiumVideo};