import initialState from './initialState';

export default function(state = initialState.comments, action) {
    switch(action.type) {
        case 'CLEAR_CURRENT_VIDEO':
            return [];
        case 'COMMENT_SUBMITTED':
            return [...state, {username: action.username, comment_text: action.comment_text}];
        case 'GET_COMMENTS_SUCCESS':
            return action.comments;
        default:
            return state;
    }
}