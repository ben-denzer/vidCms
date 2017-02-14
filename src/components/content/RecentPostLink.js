import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const RecentPostLink = props => {
    return (
        <StyledLink to={props.blogUrl ? `/blog/${props.blogUrl}` : `/watch/free/${props.id}`}>
            <RecentTitle>{props.title}</RecentTitle>
            <RecentHeadline>{props.headline}</RecentHeadline>
        </StyledLink>
    );
};

const StyledLink = styled(Link)`
    text-decoration: none;

    &:hover {
        opacity: .8;
        text-decoration: none;
    }
`;

const RecentTitle = styled.h3`
    font-size: 16px;
    font-weight: bold;
    color: #222;
    font-weight: bold;
`;

const RecentHeadline = styled.h4`
    font-size: 16px;
    font-weight: normal;
    color: #222;
`;

export default RecentPostLink;