import React            from 'react';
import Sidebar          from './shared/Sidebar';
import {withRouter}     from 'react-router-dom';
import {createMarkupWithLinks}     from '../logic/createMarkup';
import CommentSection   from '../containers/CommentContainer';
import {
    PageTitle,
    PageHeadline,
    PageContainer,
    ContentContainer
} from '../styles/share';

const BlogPage = ({allBlogs, allImages}) => {
    let post = {blog_title: '', blog_headline: '', blog_post_url: ''};
    let image;
    const path = location.pathname;

    if (allBlogs && allBlogs.length) {
        post = allBlogs.filter(blog => path.slice(path.lastIndexOf('/') + 1) === blog.blog_post_url)[0];

        if (!post) {
            return (
                <PageContainer className="pageContainer">
                    <ContentContainer className="contentContainer">
                        <PageTitle className="pageTitle">Page Not Found</PageTitle>
                    </ContentContainer>
                    <Sidebar />
                </PageContainer>
            );
        } else {
            const imgTest = allImages.filter(image => image.blog_fk === post.blog_id);
            if (imgTest.length) image = imgTest[0].image_id;
        }
    }

    const {blog_title, blog_headline, blog_text} = post;

    return (
        <PageContainer className="pageContainer">
            <ContentContainer className="contentContainer">
                <PageTitle className="pageTitle">{blog_title}</PageTitle>
                <PageHeadline className="sectionHeader">{blog_headline}</PageHeadline>
                <div dangerouslySetInnerHTML={blog_text && createMarkupWithLinks(blog_text)} />
                <CommentSection />
            </ContentContainer>
            <Sidebar img={image} alt="Blog Image" />
        </PageContainer>
    );
};

export default withRouter(BlogPage);