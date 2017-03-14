import initialState from './initialState';

export default function(state = initialState.user, action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            const {userData, token} = action;
            return Object.assign({}, userData, {token});
        case 'LOGOUT':
            return {username: '', token: '', premium: false, admin: false};
        default:
            return state;
    }
}