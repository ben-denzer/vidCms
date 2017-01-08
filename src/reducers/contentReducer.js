import initialState from './initialState';

export default function(state = initialState.content, action) {
    switch(action.type) {
        case 'ALL_BLOGS_SUCCESS':
            return Object.assign({}, state, {allBlogs: action.allBlogs});
        case 'ALL_VIDEOS_SUCCESS':
            return Object.assign({}, state, {allVideos: action.allVideos});
        case 'CLEAR_CURRENT_VIDEO':
            let currentVideo = {};
            for (let i in state.currentVideo) {
                if (state.currentVideo.hasOwnProperty(i)) {
                    currentVideo[i] = '';
                }
            }
            return Object.assign({}, state, {currentVideo});
        case 'GET_VIDEO_SUCCESS':
            return Object.assign({}, state, {currentVideo: action.video[0]});
        default:
            return state;
    }
}