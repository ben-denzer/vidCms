import initialState from './initialState';

export default function(state= initialState.admin, action) {
    switch(action.type) {
        case 'ADMIN_DATA_SUCCESS':
            return Object.assign(action.allData);
        case 'DELETE_COMMENTS_SUCCESS':
            const allData = Object.assign(
                {},
                state.adminData,
                {
                    comments: state.adminData.comments.filter(a => {
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