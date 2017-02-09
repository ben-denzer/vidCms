import React from 'react';
import RecentPosts from './home/RecentPosts';
import {
    PageTitle,
    PageHeadline,
    PageContainer,
    ContentContainer,
    Sidebar
} from '../styles/share';

const HomePage = (props) => {
    return (
        <div>
            <PageTitle>JavaScript, Soft Skills, Getting Your First Job, and More</PageTitle>
            <PageContainer>
                <ContentContainer>
                    <RecentPosts allBlogs={props.allBlogs} />
                </ContentContainer>
                <Sidebar></Sidebar>
            </PageContainer>
        </div>
    );
};

export default HomePage;