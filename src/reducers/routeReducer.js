import initialState from './initialState';

export default function(state = initialState.route, action) {
    switch(action.type) {
        case 'PUSH_LOCATION':
            // I'm only putting this in state so I can go back to the last page after login/signup,
            // So I'm not putting /auth pages in state at all
            return /auth/.test(action.pathname) ? state : [action.pathname, ...state];
        default:
            return state;
    }
}