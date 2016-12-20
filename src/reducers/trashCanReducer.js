import initialState from './initialState';

export default function(state = initialState.trashCan, action) {
    switch(action.type) {
        default:
            return state;
    }
}