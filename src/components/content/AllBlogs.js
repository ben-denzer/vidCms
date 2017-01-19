import React from 'react';
import {connect} from 'react-redux';
import BlogLink from './BlogLink';

const AllBlogs = (props) => {
    let blogs = [];
    if (props.allBlogs.length) {
        blogs = props.allBlogs.map(a => {
            return <BlogLink
                key={a.blog_id}
                id={a.blog_id}
                title={a.blog_title || ''}
                headline={a.blog_headline || ''}
                blog_post_url={a.blog_post_url}
                date={a.blog_date}
                showDate={props.showDate}
                rootUrl={props.rootUrl}
            />
        });
    }
    return (
        <div id="all_blogs_container" className="all-content-container">
            <div id="all_blogs" className="all-content-inner">
                {blogs || 'Error Loading Recent Blogs, Please Refresh Your Browser'}
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        allBlogs: state.content.allBlogs,
    }
};

export default connect(mapStateToProps)(AllBlogs);