import React            from 'react';
import BlogThumbnail    from './content/BlogThumbnail';
import Sidebar          from './shared/Sidebar';
import {
    PageHeading,
    PageTitle,
    PageContainer,
    ContentContainer
} from '../styles/share';

const AllPosts = ({allBlogs, allImages}) => {
    let recentPosts = <div key={0}></div>

    if (allBlogs && allBlogs.length) {
        recentPosts = allBlogs.map(blog => {
            const imgUrl = allImages.filter(image => image.blog_fk === blog.blog_post_url)[0].image_url;
            return (
                <BlogThumbnail
                    key={blog.blog_id}
                    title={blog.blog_title}
                    headline={blog.blog_headline}
                    blogUrl={blog.blog_post_url}
                    imgUrl={imgUrl}
                />
            );
        });
    }

    return (
        <PageContainer className="pageContainer">
            <ContentContainer className="contentContainer">
                <PageHeading>
                    <PageTitle className="pageTitle">All Articles</PageTitle>
                </PageHeading>
                {recentPosts}
            </ContentContainer>
            <Sidebar />
        </PageContainer>
    );
};

export default AllPosts;