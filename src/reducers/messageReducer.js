import initialState from './initialState';

export default function(state = initialState.message, action) {
    switch(action.type) {
        case 'NEW_MESSAGE':
            return Object.assign({}, state, {[action.messageType]: action.message});
        case 'CLEAR_MESSAGE':
            return {error: '', success: '', info: ''};
        case 'UPLOAD_SUCCESS':
            return {error: '', success: 'File Uploaded', info: ''};
        default:
            return state;
    }
}