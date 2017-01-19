import React from 'react';
import {browserHistory} from 'react-router';

const BlogLink = (props) => {
    const rootUrl = props.rootUrl || '/read/free/';
    return (
        <div
            id="blog_link_container"
            className="content-placeholder-container"
            onClick={() => browserHistory.push(`${rootUrl}${props.blog_post_url}`)}
        >
            <p id="blog_title" className="content-title">{props.title}</p>
            <p id="blog_headline" className="content-title">{props.headline}</p>
            {props.showDate && <p>{props.blog_date}</p>}
        </div>
    );
};

export default BlogLink;