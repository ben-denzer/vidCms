import initialState from './initialState';

export default function(state = initialState.forms, action) {
    switch(action.type) {
        case 'AUTH_ERROR':
            return Object.assign({}, state, {authErrorVal: action.error});
        case 'CHANGE_PW_SUCCESS':
            return Object.assign({}, state, {
                passwordVal     : '',
                password2Val    : '',
                oldPasswordVal  : '',
                authErrorVal    : ''
            });
        case 'CLEAR_ADMIN_FORM':
            return Object.assign({}, state, {
                    blogImageUrl        : '',
                    editorHtml          : '',
                    uploadHeadlineVal   : '',
                    uploadTitleVal      : '',
                    youtubeUrlVal       : ''
            });
        case 'COMMENT_SUBMITTED':
            return Object.assign({}, state, {commentVal: ''});
        case 'EDITOR_CHANGE':
            return Object.assign({}, state, {editorHtml: action.currentState, clearForms: false});
        case 'EMAIL_SUCCESS':
            return Object.assign({}, state, {emailVal: ''});
        case 'SAVE_DATA_CLICKED':
            return Object.assign({}, state, {saveDataVal: action.newVal});
        case 'TEXT_CHANGE':
            return Object.assign({}, state, {[action.inputId + 'Val']: action.inputVal});
        case 'POPULATE_BLOG_FORM':
            console.log(action);
            return Object.assign(
                {},
                state,
                {
                    uploadTitleVal      : action.thisBlog.blog_title,
                    uploadHeadlineVal   : action.thisBlog.blog_headline,
                    editorHtml          : action.thisBlog.blog_text,
                    blogImageUrl        : action.thisBlog.image_url,
                }
            );
        case 'REMOVE_CLEAR_FORMS':
            return Object.assign({}, state, {clearForms: false});
        case 'SIGNUP_SUCCESS':
            return Object.assign({}, state, {
                usernameVal     : '',
                passwordVal     : '',
                password2Val    : '',
                emailVal        : '',
                saveDataVal     : false,
                authErrorVal    : ''
            });
        case 'UPLOAD_SUCCESS':
            return Object.assign({}, state, {
                authErrorVal        : '',
                clearForms          : true,
                editorHtml          : '',
                blogImageUrl        : '',
                uploadTitleVal      : '',
                uploadHeadlineVal   : '',
                youtubeUrlVal       : ''
            });
        default:
            return state;
    }
}