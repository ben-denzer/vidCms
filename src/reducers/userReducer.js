import initialState from './initialState';

export default function(state = initialState.user, action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {name: action.name, token: action.token, premium: action.premium});
        case 'LOGOUT':
            return {
                name: '',
                token: '',
                premium: false,
                admin: false
            }
        default:
            return state;
    }
}