import React            from 'react';
import Sidebar          from './shared/Sidebar';
import {withRouter}     from 'react-router-dom';
import {Helmet}         from 'react-helmet';
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
        const temp = allBlogs.filter(blog => path.slice(path.lastIndexOf('/') + 1) === blog.blog_post_url);
        post = temp.length && temp[0];

        if (!post) {
            return (
                <PageContainer className="pageContainer">
                    <ContentContainer className="contentContainer">
                        <PageTitle className="pageTitle">Page Not Found</PageTitle>
                    </ContentContainer>
                    <Sidebar noAd />
                </PageContainer>
            );
        } else {
            const imgTest = allImages.filter(image => Number(image.blog_fk) === Number(post.blog_id));
            if (imgTest.length) image = imgTest[0].image_url;
        }
    }

    const {blog_title, blog_headline, blog_seo_description, blog_text} = post;

    return (
        <PageContainer className="pageContainer">
            <Helmet>
                <title>{`${blog_title} | Construction to Code`}</title>
                <meta name="description" content={`${blog_seo_description || blog_headline}`} />
            </Helmet>
            <ContentContainer className="contentContainer">
                <PageTitle className="pageTitle">{blog_title}</PageTitle>
                <PageHeadline className="sectionHeader">{blog_headline}</PageHeadline>
                <div dangerouslySetInnerHTML={blog_text && createMarkupWithLinks(blog_text)} />
                <CommentSection />
            </ContentContainer>
            <Sidebar noAd img={image} alt="Blog Image" />
        </PageContainer>
    );
};

export default withRouter(BlogPage);
