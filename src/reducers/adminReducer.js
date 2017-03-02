import initialState from './initialState';

export default function(state= initialState.admin, action) {
    switch(action.type) {
        case 'ADMIN_DATA_SUCCESS':
            const {users, blogs, images, comments, videos} = action.adminData;
            return Object.assign({}, {users, blogs, images, comments, videos});
        case 'DELETE_COMMENTS_SUCCESS':
            const allData = Object.assign(
                {},
                state,
                {
                    comments: state.comments.filter(a => {
                        return action.trash.indexOf(a.comment_id.toString()) === -1
                    })
                }
            );
            return Object.assign(
                {},
                state,
                {adminData: allData}
            );
        default:
            return state;
    }
}