import React from 'react';
import BlogPlaceholder from '../content/BlogPlaceholder';

const RecentBlogs = (props) => {
    let blogs = [];
    if (props.allBlogs.length) {
        blogs = props.allBlogs.slice(0,3).map(a => {
            return <BlogPlaceholder
                key={a.blog_id}
                id={a.blog_id}
                title={a.blog_title || ''}
                headline={a.blog_headline || ''}
                text={a.blog_text || ''}
                date={a.blog_date}
            />
        });
    }
    return (
        <div id="recent_blogs_container" className="hpt-content-container">
            <div id="recent_blogs" className="hpt-content-inner">
                {blogs || 'Error Loading Recent Blogs, Please Refresh Your Browser'}
            </div>
        </div>
    );
};

export default RecentBlogs;