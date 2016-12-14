import initialState from './initialState';

export default function(state = initialState.message, action) {
    switch(action.type) {
        case 'EMAIL_SUCCESS':
            return {error: '', success: 'Email Sent, Make Sure To Check Your Spam Folder', info: ''};
        case 'NEW_MESSAGE':
            return Object.assign({}, state, {[action.messageType]: action.text});
        case 'CLEAR_MESSAGE':
            return {error: '', success: '', info: ''};
        case 'UPLOAD_SUCCESS':
            return {error: '', success: 'File Uploaded', info: ''};
        default:
            return state;
    }
}