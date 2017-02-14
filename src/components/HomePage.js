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
                    <PageTitle className="pageTitle">Node, React, Web Development, and Life</PageTitle>
                </PageHeading>
                <p>I took a pretty unconventional path into web development. I am a licenced crane operator, a commercial driver, and a geotechnical driller. I'm also a front end developer at my day job and a full stack JavaScript developer in my spare time.</p>

                <p>This site is about front-end / node.js development and anything else that I find interesting.</p>
                <HpLinkContainer>
                    <StyledLink to='/blog'>Articles</StyledLink>
                    <StyledLink to='/videos'>Videos</StyledLink>
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

    &:hover {
        color: black;
    }
`;



export default HomePage;