import {connect}                            from 'react-redux';
import {handleTextChange}                   from '../actions/formActions.js';
import {submitComment, getVideoComments}    from '../actions/commentActions';
import CommentSection                       from '../components/shared/CommentSection';

const mapStateToProps = state => ({
    video_comments: state.comments,
    commentVal:     state.forms.commentVal,
    username:       state.user.username,
    token:          state.user.token,
});

const mapDispatchToProps = dispatch => ({
    handleTextChange:   (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
    submitComment:      (options) => dispatch(submitComment(options, dispatch)),
    getVideoComments:   (video_id) => dispatch(getVideoComments(video_id, dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentSection);