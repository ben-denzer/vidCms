import initialState from './initialState';

export default function(state= initialState.admin, action) {
    switch(action.type) {
        case 'ADMIN_DATA_SUCCESS':
            const {users, blogs, images, comments, videos} = action.adminData;
            return Object.assign({}, {users, blogs, images, comments, videos});
        case 'BANNED_USER':
            const updatedUsers = state.users.map(a => {
                if (a.user_id === action.bannedUser) {
                    return Object.assign({}, a, {banned_user: true});
                }
                return a;
            });
            return Object.assign({}, state, {users: updatedUsers});
        case 'DELETE_COMMENTS_SUCCESS':
            return Object.assign({}, state, {
                comments: state.comments.filter(a => {
                    return action.trash.indexOf(a.comment_id) === -1
                })
            });
        default:
            return state;
    }
}