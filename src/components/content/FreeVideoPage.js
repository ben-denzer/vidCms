import React from 'react';
import {connect} from 'react-redux';
import {getFreeVideo, clearCurrentVideo} from '../../actions/contentActions';
import {handleTextChange} from '../../actions/formActions.js';
import {submitComment, getVideoComments} from '../../actions/commentActions';
import CommentSection from './CommentSection';


class FreeVideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }
    componentWillMount() {
        this.props.getFreeVideo(this.props.params.id);
        this.props.getVideoComments(this.props.params.id);
    }
    componentWillUnmount() {
        this.props.clearCurrentVideo();
    }
    createMarkup() {
        const text = this.props;
        if (/<script/.test(text)) return {__html: ''}
        return {__html: this.props.text.toString()};
    }
    handleChange(e) {
        this.props.handleTextChange('comment', e.target.value);
    }
    submitComment() {
        this.props.submitComment({
            name: this.props.name,
            token: this.props.token,
            video: this.props.params.id,
            blog: null,
            comment: this.props.commentVal
        });
    }
    render() {
        const {title, headline, url, token, video_comments, commentVal} = this.props;
        return (
            <div id="video_page">
                <h1>{title}</h1>
                <h2 id="video_headline">{headline}</h2>
                <iframe src={url} frameBorder="0" allowFullScreen></iframe>
                <div id="video_text" dangerouslySetInnerHTML={this.createMarkup()} />
                <CommentSection
                    comments={video_comments}
                    token={token}
                    submitComment={() => this.submitComment()}
                    handleChange={(e) => this.handleChange(e)}
                    commentVal={commentVal}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        name:           state.user.name,
        token:          state.user.token,
        title:          state.content.currentVideo.video_title,
        headline:       state.content.currentVideo.video_headline,
        url:            state.content.currentVideo.video_url,
        text:           state.content.currentVideo.video_text,
        video_comments: state.comments,
        commentVal:     state.forms.commentVal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFreeVideo:       (id) => dispatch(getFreeVideo(id, dispatch)),
        clearCurrentVideo:  () => dispatch(clearCurrentVideo()),
        handleTextChange:   (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        submitComment:      (options) => dispatch(submitComment(options, dispatch)),
        getVideoComments:   (video_id) => dispatch(getVideoComments(video_id, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FreeVideoPage);