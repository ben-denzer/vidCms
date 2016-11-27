import * as types from '../constants/actionTypes';
import {apiPromise} from './apiPromise';

const clearCurrentVideo = () => {
    return {type: types.CLEAR_CURRENT_VIDEO};
};

const getAllVideos = (dispatch) => {
    return () => {
        apiPromise({}, 'public/getAllVideos').then(
            (allVideos) => dispatch({type: types.ALL_VIDEOS_SUCCESS, allVideos}),
            () => dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
        );
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

export {clearCurrentVideo, getAllVideos, getFreeVideo, getPremiumVideo};