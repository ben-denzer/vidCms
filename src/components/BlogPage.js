import React from 'react';
import {connect} from 'react-redux';
import {createMarkup} from '../logic/shared';

const BlogPage = (props) => {
    const apiUrl = process.env['NODE_ENV'] === 'development' ?
        'http://localhost:8000/uploads/' :
        'https://bdenzer.xyz/blog/uploads/';

    // Set currentPost to empty strings to wait for api to return if needed
    let currentPost = {
        blog_id: '',
        blog_title: '',
        blog_headline: '',
        blog_text: '',
    }
    if (props.allBlogs.length) {
        currentPost = props.allBlogs.filter(a => a.blog_post_url === props.params.post_url)[0];
    }
    const {blog_id, blog_title, blog_headline, blog_text} = currentPost;


    // Set default image to JS logo hosted on main domain, check for custom blog image
    let blogImageUrl = 'https://bdenzer.com/images/js.png';
    if (props.allImages.length) {
        const customImage = props.allImages.filter(a => a.blog_fk === blog_id)[0].image_url;

        if (customImage) blogImageUrl = `${apiUrl}${customImage}`;
    }

    return (
        <div id="blog_page_container">
            <div id="blog_header_container">
                <h1>{blog_title}</h1>
                <h2>{blog_headline}</h2>
            </div>
            <div id="blog_post_container">
                <div><img src={blogImageUrl} alt={blog_title} /></div>
                <div dangerouslySetInnerHTML={createMarkup(blog_text)} />
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        allBlogs: state.content.allBlogs,
        allImages: state.content.allImages,
    }
};

export default connect(mapStateToProps)(BlogPage);