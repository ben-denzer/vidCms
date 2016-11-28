import * as types from '../constants/actionTypes';
import {apiPromise, uploadPremiumPromise} from './apiPromise';

function editorChange(currentState) {
    return {type: types.EDITOR_CHANGE, currentState};
}

function handleTextChange(inputId, inputVal) {
    return {type: types.TEXT_CHANGE, inputId, inputVal};
}

function handleCheck(newVal) {
    return {type: types.SAVE_DATA_CLICKED, newVal};
}

function handleFileUpload(file) {
    return {type: types.FILE_UPLOAD, file};
}

function submitComment(options, dispatch) {
    submitCommentToApi(options, dispatch);
    return {type: types.COMMENT_SUBMITTED, name: options.name, comment: options.comment};
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

function submitUploadFree(options, dispatch) {
    if (!options.videoTitleVal) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Please Add Title'};
    if (!options.videoHeadlineVal) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Please Add Title'};
    if (!options.youtubeUrlVal) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Please Add Embed Code'};

    let tempUrl = options.youtubeUrlVal.split('"').filter(a => /^http/.test(a));
    if (tempUrl.length !== 1) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Invalid Youtube Embed Code'}
    options.youtubeUrlVal = tempUrl;

    return (dispatch) => {
        apiPromise(options, 'admin/uploadFree').then(
            () => dispatch({type: types.UPLOAD_SUCCESS}),
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

function submitUploadPremium(options, dispatch) {
    return (dispatch) => {
        uploadPremiumPromise(options, 'uploadPremium').then(
            () => dispatch({type: types.UPLOAD_SUCCESS}),
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

export {
    editorChange,
    handleTextChange,
    handleCheck,
    handleFileUpload,
    submitComment,
    submitUploadFree,
    submitUploadPremium
};