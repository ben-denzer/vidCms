import React from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';

const VideoPlaceholder = props => {
    const {title, headline, id, placeholder_url} = props;
    return (
        <PlaceholderContainer>
            <div>
                <PlaceholderTitle>{title}</PlaceholderTitle>
                <PlaceholderHeadline>{headline}</PlaceholderHeadline>
            </div>
            <div>
                <PlaceholderImg
                    onClick={() => props.push(`/watch/${props.premium_video ? 'premium' : 'free'}/${id}`)}
                    src={placeholder_url}
                    alt="click to see video"
                />
            </div>
        </PlaceholderContainer>
    );
};

const PlaceholderContainer = styled.div`
    width: 175px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`;

const PlaceholderTitle = styled.h2`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin: 35px auto 0;
`;

const PlaceholderHeadline = styled.h3`
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    margin: 0;
`;

const PlaceholderImg = styled.img`
    width: 95%;
    height: auto;
    margin: 10px auto;

    &:hover {
        cursor: pointer;
        opacity: .7;
    }
`;

export default withRouter(VideoPlaceholder);
