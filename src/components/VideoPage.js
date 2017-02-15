import React            from 'react';
import CommentSection   from './shared/CommentSection';

class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkup  = this.createMarkup.bind(this);
        this.handleChange  = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }
    componentWillMount() {
        const pathParts = this.props.location.pathname.split('/').filter(a => a);
        const videoType = pathParts[1];
        const videoId   = pathParts[2];
        this.props.getFreeVideo(videoId);
        this.props.getVideoComments(videoId);
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
            name:       this.props.name,
            token:      this.props.token,
            video:      this.props.title.split(' ').join('-'),
            blog:       null,
            comment:    this.props.commentVal
        });
    }
    render() {
        console.log('vidPage', this.props);
        //if (!this.props.title) return <div>Loading...</div>
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

export default VideoPage;