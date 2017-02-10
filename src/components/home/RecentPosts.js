import React            from 'react';
import styled           from 'styled-components';
import EachRecentPost   from './EachRecentPost';

const RecentPosts = ({allBlogs, allImages}) => {
    let recentPosts = <div key={0}></div>

    if (allBlogs && allBlogs.length) {
        recentPosts = allBlogs.map(blog => {
            console.log('in map', blog)
            const imgUrl = allImages.filter(image => image.blog_fk === blog.blog_post_url)[0].image_url;
            return (
                <EachRecentPost key={blog.blog_id} blog={blog} imgUrl={imgUrl} />
            );
        });
    }

    return (
        <RecentPostsContainer className="recentPostsContainer">
            {recentPosts}
        </RecentPostsContainer>
    );
};

const RecentPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default RecentPosts;