import initialState from './initialState';

export default function(state = initialState.user, action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            const {userData, token, admin} = action;
            return Object.assign({}, userData, {token, admin});
        case 'LOGOUT':
            return {username: '', token: '', premium: false, admin: false};
        default:
            return state;
    }
}