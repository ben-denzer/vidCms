import React            from 'react';
import styled           from 'styled-components';
import BlogThumbnail    from './content/BlogThumbnail';

const AllPosts = ({allBlogs, allImages}) => {
    let recentPosts = <div key={0}></div>

    if (allBlogs && allBlogs.length) {
        recentPosts = allBlogs.map(blog => {
            const imgUrl = allImages.filter(image => image.blog_fk === blog.blog_post_url)[0].image_url;
            return (
                <BlogThumbnail
                    key={blog.blog_id}
                    title={blog.blog_title}
                    headline={blog.blog_headline}
                    blogUrl={blog.blog_post_url}
                    imgUrl={imgUrl}
                />
            );
        });
    }

    return (
        <AllPostsContainer className="recentPostsContainer">
            {recentPosts}
        </AllPostsContainer>
    );
};

const AllPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export default AllPosts;