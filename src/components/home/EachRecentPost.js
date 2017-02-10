import React from 'react';
import styled from 'styled-components';
import {withRouter} from 'react-router-dom';

const EachRecentPost = props => {
    const {blog_id, blog_title, blog_headline, blog_text, blog_date, blog_post_url} = props.blog;
    const {imgUrl} = props;
    const apiUrl = 'http://localhost:8000/uploads/';
    return (
        <RecentPostContainer onClick={() => props.push(`/blog/${blog_post_url}`)} className='RecentPostContainer'>
            <Image className='RecentPostImage' src={`${apiUrl}${imgUrl}`} alt={blog_title} />
            <TextContainer className='TextContainer'>
                <Title>{blog_title}</Title>
                <Headline>{blog_headline}</Headline>
            </TextContainer>
        </RecentPostContainer>
    );
};

const RecentPostContainer = styled.div`
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
`;

const Image = styled.img`
    max-width: 75px;
    max-height: 75px;
`;

const TextContainer = styled.div`
    margin-left: 15px;
`;

const Title = styled.h2`
    font-size: 22px;
    font-weight: bold;
`;

const Headline = styled.h3`
    font-size: 18px;
    margin-top: 0;
`;


export default withRouter(EachRecentPost);