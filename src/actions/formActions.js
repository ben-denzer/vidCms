import {postToApi, postWithMedia}   from './apiPromise';
import {unescapeLinksPromise}       from '../logic/unescapeLinks';
import {
    AUTH_ERROR,
    CLEAR_ADMIN_FORM,
    EDITOR_CHANGE,
    NEW_MESSAGE,
    TEXT_CHANGE,
    POPULATE_BLOG_FORM,
    REMOVE_CLEAR_FORMS,
    SAVE_DATA_CLICKED,
    UPLOAD_SUCCESS
} from '../constants/actionTypes';

const authErrorAction = (err, dispatch) => {
    if (err) {
        let error = 'unauthorized';
        dispatch({type: AUTH_ERROR, error});
    } else {
        return dispatch({type: NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
    }
};

const clearAdminForm        = () => ({type: CLEAR_ADMIN_FORM});
const editorChange          = currentState => ({type: EDITOR_CHANGE, currentState});
const handleTextChange      = (inputId, inputVal) => ({type: TEXT_CHANGE, inputId, inputVal});
const handleCheck           = newVal => ({type: SAVE_DATA_CLICKED, newVal});
const populateBlogForm      = thisBlog => ({type: POPULATE_BLOG_FORM, thisBlog});
const removeClearForms      = () => ({type: REMOVE_CLEAR_FORMS});

const submitBlog = options =>  {
    if (!options.uploadTitleVal) return {
        type: NEW_MESSAGE,
        messageType: 'error',
        text: 'Please Add Title'
    };

    if (!options.editorHtml) return {
        type: NEW_MESSAGE,
        messageType: 'error',
        text: 'Post Can\'t Be Empty'
    };

    return dispatch => {
        postWithMedia(options, 'admin/uploadBlog')
            .then(() => dispatch({type: UPLOAD_SUCCESS}))
            .catch(() => err => authErrorAction(err, dispatch));
    }
};

const submitUploadFree = options => {
    if (!options.uploadTitleVal) return {
        type: NEW_MESSAGE,
        messageType: 'error',
        text: 'Please Add Title'
    };
    
    if (!options.youtubeUrlVal) return {
        type: NEW_MESSAGE,
        messageType: 'error',
        text: 'Please Add Embed Code'
    };

    const tempUrl = options.youtubeUrlVal.split('"').filter(a => /^http/.test(a)); 
    if (tempUrl.length !== 1) return {
        type: NEW_MESSAGE,
        messageType: 'error',
        text: 'Invalid Youtube Embed Code'
    }

    options.youtubeUrlVal = tempUrl;
    options.placeholderUrl = tempUrl.slice(tempUrl.lastIndexOf('/'));

    return (dispatch) => {
        unescapeLinksPromise(options.editorHtml)
            .then(finalText => Object.assign({}, options, {editorHtml: finalText}))
            .then(options => postToApi(options, 'admin/uploadFree'))
            .then(() => dispatch({type: UPLOAD_SUCCESS}))
            .catch(err => authErrorAction(err, dispatch));
    }
};

const submitUploadPremium = options => {
    if (!options.uploadTitleVal) return {type: NEW_MESSAGE, messageType: 'error', text: 'Please Add Title'};

    return dispatch => {
        postWithMedia(options, 'admin/uploadPremium')
            .then(() => dispatch({type: UPLOAD_SUCCESS}))
            .catch(() => err => authErrorAction(err, dispatch));
    }
};

export {
    clearAdminForm,
    editorChange,
    handleTextChange,
    handleCheck,
    populateBlogForm,
    removeClearForms,
    submitBlog,
    submitUploadFree,
    submitUploadPremium
};