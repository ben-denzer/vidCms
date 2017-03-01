import React        from 'react';
import styled       from 'styled-components';
import {Link}       from 'react-router-dom';
import RecentPosts  from './content/RecentPosts';
import Sidebar      from './shared/Sidebar';
import {
    PageHeading,
    PageTitle,
    PageContainer,
    ContentContainer
} from '../styles/share';

const HomePage = (props) => {
    return (
        <PageContainer className="pageContainer">
            <ContentContainer className="contentContainer">
                <PageHeading>
                    <PageTitle className="pageTitle">
                        Node, React, Web Development, and Getting Your First Programming Job
                    </PageTitle>
                </PageHeading>
                <p>I took a pretty unconventional path into web development. I am a licenced crane operator, a commercial driver, and a geotechnical driller. For the past few years I have been writing JavaScript and now I'm a full-time developer and I have a website that is making over $20K/year on the side.</p>

                <HpLinkContainer>
                    <StyledLink to='/blog'>All Articles</StyledLink>
                    <StyledLink to='/videos'>All Videos</StyledLink>
                </HpLinkContainer>
                <RecentPosts allBlogs={props.allBlogs} allVideos={props.allVideos} />
            </ContentContainer>
            <Sidebar />
        </PageContainer>
    );
};

const HpLinkContainer = styled.div`
    width: 100%;
    padding: 40px;
    background: rgba(255,255,255,.2);
    max-width: 1000px;
    display: flex;
    justify-content: space-around;
`;

const StyledLink = styled(Link)`
    color: blue;
    text-decoration: none;
    font-size: 24px;
    margin-bottom: 3px;

    &:hover {
        color: black;
    }
`;



export default HomePage;