import initialState from './initialState';

export default function(state= initialState.admin, action) {
    switch(action.type) {
        case 'ADMIN_DATA_SUCCESS':
            const {users, blogs, images, comments, videos} = action.adminData;
            return Object.assign({}, {users, blogs, images, comments, videos});
        case 'DELETE_COMMENTS_SUCCESS':
            console.log('in reducer', action.trash);
            return Object.assign({}, state, {
                comments: state.comments.filter(a => {
                    console.log('a', a, 'trash', action.trash, 'indexof', action.trash.indexOf(a.comment_id));
                    return action.trash.indexOf(a.comment_id) === -1
                })
            });
        default:
            return state;
    }
}