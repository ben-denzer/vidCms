import * as types from '../constants/actionTypes';
import {apiPromise, uploadPremiumPromise} from './apiPromise';
import {unescapeLinks} from '../logic/shared';

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

function submitBlog(options, dispatch) {
    if (!options.blogTitleVal) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Please Add Title'};
    if (!options.editorHtml) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Post Can\'t Be Empty'};

    return (dispatch) => {
        uploadPremiumPromise(options, 'uploadBlog').then(
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

function submitUploadFree(options, dispatch) {
    if (!options.videoTitleVal) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Please Add Title'};
    if (!options.youtubeUrlVal) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Please Add Embed Code'};

    const tempUrl = options.youtubeUrlVal.split('"').filter(a => /^http/.test(a));
    if (tempUrl.length !== 1) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Invalid Youtube Embed Code'}
    options.youtubeUrlVal = tempUrl;
    options.placeholderUrl = tempUrl.slice(tempUrl.lastIndexOf('/'));

    return (dispatch) => {
        unescapeLinks(options.editorHtml).then(
            (finalText) => {
                options = Object.assign({}, options, {editorHtml: finalText})
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
        ).catch(() => dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'}));
    }
}

function submitUploadPremium(options, dispatch) {
    if (!options.videoTitleVal) return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Please Add Title'};

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
    submitBlog,
    submitUploadFree,
    submitUploadPremium
};