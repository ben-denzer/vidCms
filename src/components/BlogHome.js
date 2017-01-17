import React from 'react';
import AllBlogs from './content/AllBlogs';

const BlogHome = (props) => {
    return (
        <div id="blog_home_container">
            <h1>Blogs</h1>
            <AllBlogs />
        </div>
    );
};

export default BlogHome;