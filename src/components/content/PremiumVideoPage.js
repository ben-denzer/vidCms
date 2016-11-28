import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {getPremiumVideo, clearCurrentVideo} from '../../actions/contentActions';
import VideoBlock from './VideoBlock';
import Upgrade from './Upgrade';
import {handleTextChange, submitComment} from '../../actions/formActions.js';

class PremiumVideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
        this.getVideo = this.getVideo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
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
    }
    handleChange(e) {
        this.props.handleTextChange('comment', e.target.value);
    }
    submitComment() {
        console.log(this.props.token);
        this.props.submitComment({
            name: this.props.name,
            token: this.props.token,
            video: this.props.params.id,
            comment: this.props.commentVal
        });
    }
    render() {
        const {title, headline, url, premium_user, token, video_comments, commentVal} = this.props;
        console.log('vc', video_comments);
        const fullUrl = 'http://localhost:8000/uploads/' + url;
        let comments;
        if (video_comments && video_comments.length) {
            comments = video_comments.map(a => {
                return <div key={a.name.slice(0,2).concat(a.comment.slice(0,3))} className="commentContainer">
                    <div className="comment_name">{a.name}</div>
                    <div className="comment_main">{a.comment}</div>
                </div>
            });
        }
        return (
            <div id="video_page">
                <h1>{title}</h1>
                <h2 id="video_headline">{headline}</h2>
                <div>{url && premium_user ? <VideoBlock premium_user={premium_user} fullUrl={fullUrl} /> : <Upgrade />}</div>
                <div id="video_text" dangerouslySetInnerHTML={this.createMarkup()} />
                <h5>Comments</h5>
                <div id="comment_section">{comments}</div>
                <p id="add_comment">Add Comment</p>
                <div id="comment_editor_container">
                <button onClick={this.submitComment}>Submit</button>
                    {
                        token ?
                            <textarea onChange={this.handleChange} id="comment_editor" value={commentVal} /> :
                            <p>
                                <span className="link" onClick={() => browserHistory.push("auth/login")}>Log In</span> or
                                <span className="link" onClick={() => browserHistory.push("auth/signup")}>Sign Up</span> to Comment
                            </p>
                    }
                </div>
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
        video_comments: state.content.currentVideo.comments,
        commentVal:     state.forms.commentVal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPremiumVideo: (id, token) => dispatch(getPremiumVideo(id, token, dispatch)),
        clearCurrentVideo: () => dispatch(clearCurrentVideo()),
        handleTextChange: (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        submitComment: (options) => dispatch(submitComment(options, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PremiumVideoPage);