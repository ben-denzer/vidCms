import initialState from './initialState';

export default function(state = initialState.content, action) {
    switch(action.type) {
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
        case 'COMMENT_SUBMITTED':
            const allComments = [...state.currentVideo.comments, {name: action.name, comment: action.comment}];
            const newCurrentVideo = Object.assign({}, state.currentVideo, {comments: allComments});
            return Object.assign({}, state, {currentVideo: newCurrentVideo});
        case 'GET_VIDEO_SUCCESS':
            const forTesting = Object.assign({}, action.video[0], {comments: [{name: 'ben-free', comment: 'this is a good one'}]});
            return Object.assign({}, state, {currentVideo: /*action.video[0]*/forTesting});
        default:
            return state;
    }
}