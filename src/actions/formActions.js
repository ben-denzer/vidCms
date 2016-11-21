import * as types from '../constants/actionTypes';
import {uploadPromise} from './apiPromise';

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

function submitUpload(options, dispatch) {
    console.log('action.hit');
    return (dispatch) => {
        uploadPromise(options).then(
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
    submitUpload
};