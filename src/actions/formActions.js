import * as types from '../constants/actionTypes';

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

const uploadPromise = (options) => {
    const req = new XMLHttpRequest();
    req.open('POST', 'http://localhost:8000/admin/upload');
    let formData = new FormData();
    for (let i of options) {
        i !== 'videoInputFile' && formData.append(i, options[i]);
    }
    formData.append('video', options.videoInputFile);
    req.send(formData);
}

export {
    editorChange,
    handleTextChange,
    handleCheck,
    handleFileUpload,
    submitUpload
};