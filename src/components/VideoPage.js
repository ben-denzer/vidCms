import React            from 'react';
import styled           from 'styled-components';
import {Helmet}         from 'react-helmet';
import createMarkup     from '../logic/createMarkup';
import {apiUrl}         from '../.keys';
import CommentSection   from '../containers/CommentContainer';
import PremiumVidBox    from './content/PremiumVidBox';

class VideoPage extends React.Component {
    componentWillMount() {
        const {getFreeVideo, getPremiumVideo, match, token} = this.props;
        const params = match.params;
        const videoId = params.id;
        if (params.type === 'free') {
            getFreeVideo(videoId);
        } else if (params.type === 'premium' && token) {
            getPremiumVideo(videoId, token);
        }
    }
    componentWillReceiveProps(nextProps) {
        const {getPremiumVideo, match, token} = this.props;
        if (match.params.type === 'premium') {
            if (!token && nextProps.token) {
                getPremiumVideo(match.params.id, nextProps.token);
            }
        }
    }
    componentWillUnmount() {
        this.props.clearCurrentVideo();
    }
    render() {
        const params = this.props.match.params;
        if (!this.props.title) return <div>Loading...</div>
        const {title, headline, url, text, premium_user} = this.props;

        return (
            <VideoPageContainer id="video_page_container">
                <Helmet>
                    <title>{`${title} | Construction to Code`}</title>
                    <meta name="description" content={headline} />
                </Helmet>
                <Title>{title}</Title>
                <Headline id="video_headline">{headline}</Headline>
                {
                    params.type === 'premium' ?
                        <PremiumVidBox premium_user={premium_user} fullUrl={`${apiUrl}uploads/${url}`} /> :
                        <VideoBox src={url} frameBorder="0" allowFullScreen></VideoBox>
                }
                <Text id="video_text" dangerouslySetInnerHTML={createMarkup(text)} />
                <CommentSection />
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
