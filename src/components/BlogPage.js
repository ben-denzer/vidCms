import React        from 'react';
import Sidebar      from './shared/Sidebar';
import {withRouter} from 'react-router-dom';
import {
    PageTitle,
    PageContainer,
    ContentContainer,
    SectionHeader
} from '../styles/share';

const BlogPage = ({allBlogs, allImages}) => {
    let post = {blog_title: '', blog_headline: '', blog_post_url: ''};
    let image;
    const path = location.pathname;

    if (allBlogs && allBlogs.length) {
        post = allBlogs.filter(blog => path.slice(path.lastIndexOf('/') + 1) === blog.blog_post_url)[0];
        image = allImages.filter(image => image.blog_fk === post.blog_post_url)[0].image_url;

        if (!post) {
            return (
                <PageContainer className="pageContainer">
                    <ContentContainer className="contentContainer">
                        <PageTitle className="pageTitle">Page Not Found</PageTitle>
                    </ContentContainer>
                    <Sidebar />
                </PageContainer>
            );
        }
    }

    const {blog_title, blog_headline, blog_text} = post;

    return (
        <PageContainer className="pageContainer">
            <ContentContainer className="contentContainer">
                <PageTitle className="pageTitle">{blog_title}</PageTitle>
                <SectionHeader className="sectionHeader">{blog_headline}</SectionHeader>
                <div dangerouslySetInnerHTML={blog_text && createMarkup(blog_text)} />
            </ContentContainer>
            <Sidebar />
        </PageContainer>
    );
};

const createMarkup = text => {
    if (/<script/.test(text)) return {__html: ''}
    return {__html: text.toString()};
};

export default withRouter(BlogPage);