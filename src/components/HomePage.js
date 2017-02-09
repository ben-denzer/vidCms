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
        <PageContainer>
            <PageTitle>JavaScript, Soft Skills, Getting Your First Job, and More</PageTitle>
            <ContentContainer>
                <SectionHeader>Recent Posts</SectionHeader>
                <RecentPosts allBlogs={props.allBlogs} />
            </ContentContainer>
            <Sidebar />
        </PageContainer>
    );
};

export default HomePage;