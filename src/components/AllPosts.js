import React            from 'react';
import {Helmet}         from 'react-helmet';
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
            const tempImg = allImages.filter(image => Number(image.blog_fk) === Number(blog.blog_id));
            const imgUrl = tempImg.length && tempImg[0].image_url;

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
            <Helmet>
                <title>{`All Posts - Construction To Code`}</title>
                <meta name="description" content="View all posts from the Construction to Code Blog. JavaScript, React, Node, Express, Linux, NginX, MySQL and more" />
            </Helmet>
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
