import React from 'react';
import {connect} from 'react-redux';
import {createMarkup} from '../logic/shared';

const BlogPage = (props) => {
    let currentPost = {
        blog_title: '',
        blog_headline: '',
        blog_text: '',
    }
    if (props.allBlogs.length) {
        currentPost = props.allBlogs.filter(a => a.blog_post_url === props.params.post_url)[0];
    }
    console.log('currentPost', currentPost);
    const {blog_title, blog_headline, blog_text} = currentPost;
    return (
        <div id="blog_page_container">
            <h1>{blog_title}</h1>
            <h2>{blog_headline}</h2>
            <div dangerouslySetInnerHTML={createMarkup(blog_text)} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        allBlogs: state.content.allBlogs,
    }
};

export default connect(mapStateToProps)(BlogPage);