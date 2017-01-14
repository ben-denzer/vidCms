import React from 'react';
import {browserHistory} from 'react-router';
import {createMarkup} from '../../logic/shared';

const BlogPlaceholder = (props) => {
    return (
        <div
            id="blog_placeholder_container"
            className="content-placeholder-container"
            onClick={() => browserHistory.push(`/read/free/${props.blog_post_url}`)}
        >
            <h2 id="blog_title" className="content-title">{props.title}</h2>
            <h3 id="blog_headline" className="content-title">{props.headline}</h3>
            <div
                id="blog_text"
                className="content-text"
                dangerouslySetInnerHTML={createMarkup(props.text.slice(0, 100) + '...')}
            />
        </div>
    );
};

export default BlogPlaceholder;