import initialState from './initialState';

export default function(state = initialState.user, action) {
    switch(action.type) {
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {name: action.name, token: action.token, coins: action.coins});
        case 'LOGOUT':
            return {
                name: '',
                token: '',
                coins: 0,
                score: 0,
                showCoin: false
            }
        default:
            return state;
    }
}