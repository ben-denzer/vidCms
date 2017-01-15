import React from 'react';
import {connect} from 'react-redux';
import {getPremiumVideo, clearCurrentVideo} from '../../actions/contentActions';
import {handleTextChange} from '../../actions/formActions.js';
import {submitComment, getVideoComments} from '../../actions/commentActions';
import VideoBlock from './VideoBlock';
import Upgrade from './Upgrade';
import CommentSection from './CommentSection';

class PremiumVideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
        this.getVideo = this.getVideo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
        this.apiUrl = process.env['NODE_ENV'] === 'development' ?
            'http://localhost:8000/uploads/' :
            'https://bdenzer.xyz/blog/uploads/';
    }
    componentWillMount() {
        this.props.premium_user && this.getVideo();
    }
    componentDidUpdate(prevProps) {
        !prevProps.premium_user && this.props.premium_user && this.getVideo();
    }
    componentWillUnmount() {
        this.props.clearCurrentVideo();
    }
    createMarkup() {
        if (/<script/.test(this.props.text.toString()) || !this.props.premium_user) return {__html: ''}
        return {__html: this.props.text.toString()};
    }
    getVideo() {
        this.props.getPremiumVideo(this.props.params.id, this.props.token);
        this.props.getVideoComments(this.props.params.id);
    }
    handleChange(e) {
        this.props.handleTextChange('comment', e.target.value);
    }
    submitComment() {
        this.props.submitComment({
            name: this.props.name,
            token: this.props.token,
            video: this.props.params.id,
            comment: this.props.commentVal
        });
    }
    render() {
        const {title, headline, url, premium_user, token, video_comments, commentVal} = this.props;
        const fullUrl = this.apiUrl + url;

        return (
            <div id="video_page">
                <h1>{title}</h1>
                <h2 id="video_headline">{headline}</h2>
                <div>{url && premium_user ? <VideoBlock premium_user={premium_user} fullUrl={fullUrl} /> : <Upgrade />}</div>
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
        premium_user:   state.user.premium,
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
        getPremiumVideo:    (id, token) => dispatch(getPremiumVideo(id, token, dispatch)),
        clearCurrentVideo:  () => dispatch(clearCurrentVideo()),
        handleTextChange:   (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        submitComment:      (options) => dispatch(submitComment(options, dispatch)),
        getVideoComments:        (video_id) => dispatch(getVideoComments(video_id, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PremiumVideoPage);