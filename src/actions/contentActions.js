import * as types from '../constants/actionTypes';
import {apiPromise} from './apiPromise';

const getAllVideos = (dispatch) => {
    return () => {
        apiPromise({}, 'public/getAllVideos').then(
            (allVideos) => dispatch({type: types.ALL_VIDEOS_SUCCESS, allVideos}),
            () => dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'})
        );
    }
};

export {getAllVideos};