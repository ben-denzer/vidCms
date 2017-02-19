import {connect}            from 'react-redux';
import {withRouter}         from 'react-router-dom';
import {handleTextChange}   from '../actions/formActions.js';
import {submitComment}      from '../actions/commentActions';
import CommentSection       from '../components/shared/CommentSection';

const mapStateToProps = state => ({
    allComments:    state.content.allComments,
    commentVal:     state.forms.commentVal,
    username:       state.user.username,
    token:          state.user.token,
});

const mapDispatchToProps = dispatch => ({
    handleTextChange:   (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
    submitComment:      (options) => dispatch(submitComment(options, dispatch)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CommentSection));