import {connect}                            from 'react-redux';
import {getFreeVideo, clearCurrentVideo}    from '../actions/contentActions';
import VideoPage                            from '../components/VideoPage';

const mapStateToProps = state => {
    return {
        username:       state.user.username,
        token:          state.user.token,
        title:          state.content.currentPost.post_title,
        headline:       state.content.currentPost.post_headline,
        url:            state.content.currentPost.post_url,
        text:           state.content.currentPost.post_text,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getFreeVideo:       (id) => dispatch(getFreeVideo(id, dispatch)),
        clearCurrentVideo:  () => dispatch(clearCurrentVideo()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);