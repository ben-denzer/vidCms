import React from 'react';
import RecentPostsLink from './RecentPostsLink';

const styles = {
    container: {
        border: '1px solid black',
        width: '40%',
        padding: '10px',
        backgroundColor: '#eee',
    },
    h3: {
        textAlign: 'center'
    },
    linkContainer: {
        a: {
            cursor: 'pointer',
        }
    }
}

const RecentPosts = (props) => {
    let links = [];
    if (props.allBlogs.length) {
        links = props.allBlogs.slice(0,5).map(a => {
            return <RecentPostsLink
                key={a.blog_id}
                title={a.blog_title || ''}
                headline={a.blog_headline || ''}
                blog_post_url={a.blog_post_url}
                style={styles.linkContainer}
            />
        });
    }
    return (
        <div style={styles.container} id="recent_posts_container">
            <h3 style={styles.h3}>Recent Posts</h3>
            {links}
        </div>
    );
};

export default RecentPosts;