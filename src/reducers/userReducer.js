import initialState from './initialState';

export default function(state = initialState.user, action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            const {username, token, premium, admin} = action;
            return Object.assign({}, state, {username, token, premium, admin});
        case 'LOGOUT':
            return {username: '', token: '', premium: false, admin: false};
        default:
            return state;
    }
}