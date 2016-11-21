import initialState from './initialState';

export default function(state = initialState.forms, action) {
    switch(action.type) {
        case 'AUTH_ERROR':
            return Object.assign({}, state, {authErrorVal: action.error});
        case 'EDITOR_CHANGE':
            return Object.assign({}, state, {editorHtml: action.currentState});
        case 'FILE_UPLOAD':
            return Object.assign({}, state, {videoInputFile: [action.file]});
        case 'SAVE_DATA_CLICKED':
            return Object.assign({}, state, {saveDataVal: action.newVal});
        case 'TEXT_CHANGE':
            return Object.assign({}, state, {[action.inputId + 'Val']: action.inputVal});
        case 'SIGNUP_SUCCESS':
            return Object.assign({}, state, {
                usernameVal: '',
                passwordVal: '',
                password2Val: '',
                emailVal: '',
                saveDataVal: false,
                authErrorVal: ''
            });
        case 'UPLOAD_SUCCESS':
            console.log('hit upload success');
            return Object.assign({}, state, {
                authErrorVal: '',
                editorHtml: '',
                videoInputFile: [],
                videoTitleVal: '',
                videoHeadlineVal: ''
            });
        default:
            return state;
    }
}