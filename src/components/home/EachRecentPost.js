import React        from 'react';
import styled       from 'styled-components';
import {withRouter} from 'react-router-dom';
import {mediaUrl}     from '../../.keys';

const EachRecentPost = props => {
    const {title, headline, blogUrl, imgUrl} = props;

    return (
        <RecentPostContainer onClick={() => props.push(`/blog/${blogUrl}`)} className='RecentPostContainer'>
            <Image className='RecentPostImage' src={`${mediaUrl}${imgUrl}`} alt={title} />
            <TextContainer className='TextContainer'>
                <Title>{title}</Title>
                <Headline>{headline}</Headline>
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