import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const EachRecentPost = props => {
    return (
        <StyledLink to={`/blog/${props.blog_post_url}`}>
            <RecentTitle>{props.title}</RecentTitle>
            <RecentHeadline>{props.headline}</RecentHeadline>
        </StyledLink>
    );
};

const StyledLink = styled(Link)`

`;

const RecentTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
`;

const RecentHeadline = styled.h4`
    font-size: 16px;
    font-weight: normal;
`;

export default EachRecentPost;