import * as types from '../constants/actionTypes';
import {apiPromise, uploadPremiumPromise} from './apiPromise';
import {unescapeLinks} from '../logic/shared';

const authErrorAction = (err, dispatch, formName) => {
    if (err) {
        let error = 'unauthorized';
        dispatch({type: types.AUTH_ERROR, error});
    } else {
        return dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
    }
};

const dePopulateBlogForm = () => {
    return {type: types.DE_POPULATE_BLOG_FORM};
};

const editorChange = currentState => {
    return {type: types.EDITOR_CHANGE, currentState};
};

const handleTextChange = (inputId, inputVal) => {
    return {type: types.TEXT_CHANGE, inputId, inputVal};
};

const handleCheck = newVal => {
    return {type: types.SAVE_DATA_CLICKED, newVal};
};

const handleFileUpload = file => {
    return {type: types.FILE_UPLOAD, file};
};

const populateBlogForm = thisBlog => {
    return {type: types.POPULATE_BLOG_FORM, thisBlog};
};

const submitBlog = options =>  {
    if (!options.blogTitleVal)  return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Please Add Title'};
    if (!options.editorHtml)    return {type: types.NEW_MESSAGE, messageType: 'error', text: 'Post Can\'t Be Empty'};

    return dispatch => {
        uploadPremiumPromise(options, 'uploadBlog')
            .then(() => dispatch({type: types.UPLOAD_SUCCESS}))
            .catch(() => err => authErrorAction(err, dispatch));
    }
};

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
    dePopulateBlogForm,
    editorChange,
    handleTextChange,
    handleCheck,
    handleFileUpload,
    populateBlogForm,
    submitBlog,
    submitUploadFree,
    submitUploadPremium
};