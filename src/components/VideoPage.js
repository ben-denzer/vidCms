import React            from 'react';
import styled           from 'styled-components';
import createMarkup     from '../logic/createMarkup';
//import CommentSection   from '../containers/CommentContainer';

class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange  = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }
    componentWillMount() {
        const pathParts = this.props.location.pathname.split('/').filter(a => a);
        const videoType = pathParts[1];
        const videoId   = pathParts[2];
        // if (videoType === 'free') {
        //     console.log('video_id', videoId)
        //     this.props.getFreeVideo(videoId);
        //     this.props.getVideoComments(videoId);
        // }
    }
    componentWillUnmount() {
        this.props.clearCurrentVideo();
    }
    handleChange(e) {
        this.props.handleTextChange('comment', e.target.value);
    }
    submitComment() {
        this.props.submitComment({
            username:   this.props.username,
            token:      this.props.token,
            video:      this.props.title.split(' ').join('-'),
            blog:       null,
            comment:    this.props.commentVal
        });
    }
    render() {
        if (!this.props.title) return <div>Loading...</div>
        const {title, headline, url, text, token, video_comments, commentVal} = this.props;
        return (
            <VideoPageContainer id="video_page_container">
                <Title>{title}</Title>
                <Headline id="video_headline">{headline}</Headline>
                <VideoBox src={url} frameBorder="0" allowFullScreen></VideoBox>
                <Text id="video_text" dangerouslySetInnerHTML={createMarkup(text)} />
                {/*<CommentSection />*/}
            </VideoPageContainer>
        );
    }
}

const VideoPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin-bottom: 0;
`;

const Headline = styled.h2`
    margin: 5px auto 10px;
`;

const VideoBox = styled.iframe`
    width: 560px;
    height: 315px;
    max-width: 99%;
`;

const Text = styled.div`
    width: 60%;
    margin-top: 25px;
    font-size: 16px;

    @media (max-width: 900px) {
        width: 90%;
    }
    @media (max-width: 600px) {
        width: 99%;
    }
`;

export default VideoPage;