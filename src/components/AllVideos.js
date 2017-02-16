import React            from 'react';
import styled           from 'styled-components';
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
            <ContentContainer className="contentContainer">
                <PageHeading>
                    <PageTitle className="pageTitle">All Videos</PageTitle>
                </PageHeading>
                <VideoThumbContainer>
                    {videos}
                </VideoThumbContainer>
            </ContentContainer>
            <Sidebar />
        </PageContainer>
    );
};

const VideoThumbContainer = styled.div`
    display: flex;
    flex-direction: row wrap;
`;

export default VideoHome;