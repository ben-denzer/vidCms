import React            from 'react';
import styled           from 'styled-components';
import RecentPostLink   from './RecentPostLink';

const RecentPosts = ({allBlogs, allImages, allVideos}) => {
    let recentPosts = [];
    let recentVideos = [];

    if (allBlogs && allBlogs.length) {
        recentPosts = allBlogs.slice(0,3).map(blog => {
            return (
                <RecentPostLink
                    key={blog.blog_id}
                    title={blog.blog_title}
                    headline={blog.blog_headline}
                    blogUrl={blog.blog_post_url}
                />
            );
        });
    }

    if (allVideos && allVideos.length) {
        recentVideos = allVideos.slice(0,3).map(video => {
            return (
                <RecentPostLink
                    key={video.video_id}
                    id={video.video_id}
                    headline={video.video_headline}
                    premium_video={video.premium}
                    title={video.video_title}
                />
            );
        });
    }

    return (
        <RecentPostsContainer className="recentPostsContainer">
            <Heading>Recent Articles</Heading>
            {recentPosts}

            <Heading>Recent Videos</Heading>
            {recentVideos}
        </RecentPostsContainer>
    );
};

const Heading = styled.h3`
    font-size: 24px;
    font-weight: bold;
    text-decoration: underline;
`;

const RecentPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default RecentPosts;