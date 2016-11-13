import initialState from './initialState';

export default function(state = initialState.user, action) {
    console.log('reducer hit');
    switch(action.type) {
        case 'CORRECT_ANSWER':
            const newScore = state.score + 1;
            const showCoin = newScore % 2 === 0;
            return Object.assign({}, state, {score: newScore, showCoin});
        case 'SIGNUP_SUCCESS':
        case 'LOGIN_SUCCESS':
            return Object.assign({}, state, {name: action.name, token: action.token, coins: action.coins});
        case 'LOGOUT':
            console.log('logout')
            return {
                name: '',
                token: '',
                coins: 0,
                score: 0,
                showCoin: false
            }
        case 'HIDE_COIN':
            return Object.assign({}, state, {showCoin: false});
        default:
            return state;
    }
}