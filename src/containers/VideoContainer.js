import {connect}                            from 'react-redux';
import VideoPage                            from '../components/VideoPage';
import {
    getFreeVideo,
    getPremiumVideo,
    clearCurrentVideo
} from '../actions/contentActions';

const mapStateToProps = state => {
    return {
        username:       state.user.username,
        premium_user:   state.user.premium,
        token:          state.user.token,
        title:          state.content.currentPost.post_title,
        headline:       state.content.currentPost.post_headline,
        url:            state.content.currentPost.post_url,
        text:           state.content.currentPost.post_text,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getFreeVideo:       (id) => dispatch(getFreeVideo(id)),
        getPremiumVideo:    (id, token) => dispatch(getPremiumVideo(id, token)),
        clearCurrentVideo:  () => dispatch(clearCurrentVideo()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);