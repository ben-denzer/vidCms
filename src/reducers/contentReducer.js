import initialState from './initialState';

export default function(state = initialState.content, action) {
    switch(action.type) {
        case 'ALL_CONTENT_SUCCESS':
            const {allBlogs, allComments, allImages, allVideos} = action;
            return Object.assign({}, state, {allBlogs, allComments, allImages, allVideos});

        case 'CLEAR_CURRENT_VIDEO':
            let currentPost = {};
            for (let i in state.currentPost) {
                if (state.currentPost.hasOwnProperty(i)) {
                    currentPost[i] = '';
                }
            }
            return Object.assign({}, state, {currentPost});

        case 'COMMENT_SUBMITTED':
            const original = state.allComments;
            const newState = [
                ...original,
                {
                    username: action.username,
                    comment_text: action.comment_text,
                    blog_fk: action.post_fk,   // Kind of a hack, but this is short-lived (until refresh)
                    video_fk: action.post_fk   // <----
                }
            ];
            return Object.assign({}, state, {allComments: newState});

        case 'GET_VIDEO_SUCCESS':
            const {video_title, video_headline, video_text, video_url} = action.video[0];
            const newCurrentPost = Object.assign(
                {},
                state.currentPost,
                {
                    post_title      : video_title,
                    post_headline   : video_headline,
                    post_text       : video_text,
                    post_url        : video_url
                }
            )
            return Object.assign({}, state, {currentPost: newCurrentPost});

        default:
            return state;
    }
}