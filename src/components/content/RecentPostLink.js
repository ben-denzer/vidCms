import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const RecentPostLink = props => {
    const thisLink = props.blogUrl ?
        `/blog/${props.blogUrl}` :
        props.premium_video ?
            `/watch/premium/${props.id}` :
            `/watch/free/${props.id}`;

    return (
        <StyledLink to={thisLink}>
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
    margin-top: 3px;
`;

const RecentHeadline = styled.h4`
    font-size: 16px;
    font-weight: normal;
    color: #222;
`;

export default RecentPostLink;