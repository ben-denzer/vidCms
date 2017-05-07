import React            from 'react';
import styled           from 'styled-components';
import {Helmet}         from 'react-helmet';
import VideoThumbnail   from './content/VideoThumbnail';
import Sidebar          from './shared/Sidebar';
import {
    PageHeading,
    PageTitle,
    PageContainer,
    ContentContainer
} from '../styles/share';

const VideoHome = ({allVideos}) => {
    let videos = [];

    if (allVideos.length) {
        videos = allVideos.map(a => {
            return <VideoThumbnail
                key={a.video_id}
                id={a.video_id}
                title={a.video_title || ''}
                headline={a.video_headline || ''}
                text={a.video_text || ''}
                premium_video={a.premium}
                video_date={a.video_date}
                placeholder_url={a.placeholder_url}
            />
        });
    }

    return (
        <PageContainer className="pageContainer">
            <Helmet>
                <title>All Videos | Construction to Code</title>
                <meta name="description" content="All videos from the Construction to Code blog. Linux, NginX, MySQL, Node.js, Express, JavaScript, Elm Lang and more" />
            </Helmet>
            <ContentContainer className="contentContainer">
                <PageHeading>
                    <PageTitle className="pageTitle">All Videos</PageTitle>
                </PageHeading>
                <VideoThumbContainer>
                    {videos}
                </VideoThumbContainer>
            </ContentContainer>
            <Sidebar noAd />
        </PageContainer>
    );
};

const VideoThumbContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default VideoHome;
