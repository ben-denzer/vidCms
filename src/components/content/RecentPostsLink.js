import React from 'react';
import {browserHistory} from 'react-router';

const RecentPostsLink = (props) => {
    const {title, headline, blog_post_url} = props;

    return (
        <div className="recent_posts_link">
            <a style={props.style.a} onClick={() => browserHistory.push(`/read/free/${blog_post_url}`)}>{title}</a>
            <p>{headline}</p>
        </div>
    );
};

export default RecentPostsLink;