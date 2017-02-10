import React        from 'react';
import RecentPosts  from './home/RecentPosts';
import Sidebar      from './shared/Sidebar';
import {
    PageTitle,
    PageContainer,
    ContentContainer,
    SectionHeader
} from '../styles/share';

const HomePage = (props) => {
    return (
        <PageContainer className="pageContainer">
            <ContentContainer className="contentContainer">
                <PageTitle className="pageTitle">Node, React, Web Development, and Life</PageTitle>
                <SectionHeader className="sectionHeader">Recent Posts</SectionHeader>
                <RecentPosts
                    allBlogs={props.allBlogs}
                    allImages={props.allImages}
                />
            </ContentContainer>
            <Sidebar />
        </PageContainer>
    );
};

export default HomePage;