import initialState from './initialState';

export default function(state = initialState.content, action) {
    switch(action.type) {
        case 'ALL_VIDEOS_SUCCESS':
            return Object.assign({}, state, {allVideos: action.allVideos});
        default:
            return state;
    };
}