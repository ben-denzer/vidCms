import initialState from './initialState';

export default function(state = initialState.trashCan, action) {
    switch(action.type) {
        case 'TRASH_COMMENT':
            return Object.assign({}, state, {commentTrashCan: action.itemsToRemove});
        case 'DELETE_COMMENTS_SUCCESS':
            return Object.assign({}, state, {commentTrashCan: []});
        case 'EMPTY_TRASH':
            return Object.assign({}, state, {commentTrashCan: []});
        default:
            return state;
    }
}