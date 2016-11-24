import initialState from './initialState';

export default function(state = initialState.content, action) {
    switch(action.type) {
        case 'ALL_VIDEOS_SUCCESS':
            return Object.assign({}, state, {allVideos: action.allVideos});
        case 'GET_VIDEO_SUCCESS':
            console.log('reducer', action.video);
            return Object.assign({}, state, {currentVideo: action.video[0]});
        default:
            return state;
    }
}