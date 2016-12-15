import initialState from './initialState';

export default function(state= initialState.admin, action) {
    switch(action.type) {
        case 'ADMIN_DATA_SUCCESS':
            return Object.assign(action.allData);
        default:
            return state;
    }
}