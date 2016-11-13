import initialState from './initialState';

export default function(state = initialState.forms, action) {
    switch(action.type) {
        case 'AUTH_ERROR':
            return Object.assign({}, state, {authErrorVal: action.error});
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
        default:
            return state;
    }
}