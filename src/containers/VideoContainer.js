import {connect}                            from 'react-redux';
import {getFreeVideo, clearCurrentVideo}    from '../actions/contentActions';
import {handleTextChange}                   from '../actions/formActions.js';
import {submitComment, getVideoComments}    from '../actions/commentActions';
import VideoPage                            from '../components/VideoPage';

const mapStateToProps = state => {
    return {
        username:       state.user.username,
        token:          state.user.token,
        title:          state.content.currentPost.post_title,
        headline:       state.content.currentPost.post_headline,
        url:            state.content.currentPost.post_url,
        text:           state.content.currentPost.post_text,
        video_comments: state.comments,
        commentVal:     state.forms.commentVal
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getFreeVideo:       (id) => dispatch(getFreeVideo(id, dispatch)),
        clearCurrentVideo:  () => dispatch(clearCurrentVideo()),
        handleTextChange:   (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        submitComment:      (options) => dispatch(submitComment(options, dispatch)),
        getVideoComments:   (video_id) => dispatch(getVideoComments(video_id, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);