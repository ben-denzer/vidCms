import initialState from './initialState';

export default function(state = initialState.message, action) {

    const isApiSuccess = /SUCCESS$/.test(action.type);
    if (isApiSuccess) return Object.assign({}, state, {pendingApiCalls: state.pendingApiCalls - 1});

    switch(action.type) {
        case 'API_STARTED':
            return Object.assign({}, state, {pendingApiCalls: state.pendingApiCalls + 1});
        case 'CLEAR_MESSAGE':
            return Object.assign({}, state, {error: '', success: '', info: ''});
        case 'DELETE_COMMENTS_SUCCESS':
            return Object.assign({}, state, {success: 'Comments Deleted'});
        case 'EMAIL_SUCCESS':
            return Object.assign({}, state, {success: 'Email Sent, Make Sure To Check Your Spam Folder'});
        case 'NETWORK_ERROR':
            return Object.assign({}, state, {error: 'There was a problem with the network. Please refresh your browser to try again'});
        case 'NEW_MESSAGE':
            console.log(action.messageType, action.text);
            return Object.assign({}, state, {[action.messageType]: action.text});
        case 'UPLOAD_SUCCESS':
            return Object.assign({}, state, {success: 'File Uploaded'});
        default:
            return state;
    }
}