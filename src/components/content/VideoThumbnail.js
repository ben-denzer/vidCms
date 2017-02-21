import React        from 'react';
import {withRouter} from 'react-router-dom';
import styled       from 'styled-components';

const VideoThumbnail = (props) => {
    const {title, headline, id, placeholder_url, premium_video} = props;
    return (
        <VideoThumbnailContainer>
            <ImgBox>
                <Thumb
                    onClick={() => props.push(`/watch/${premium_video ? 'premium' : 'free'}/${id}`)}
                    src={placeholder_url}
                    alt="click to see video"
                />
            </ImgBox>
            <Heading>
                <Title>{title}</Title>
                <Headline>{headline}</Headline>
            </Heading>
        </VideoThumbnailContainer>
    );
};

const VideoThumbnailContainer = styled.div`
    margin: 10px;
    display: flex;
    
    &:hover {
        cursor: pointer;
        opacity: .8;
    }
`;

const Heading = styled.div`
    display: flex;
    flex-direction: column;
`;

const ImgBox = styled.div`
    margin-right: 15px;
`;

const Title = styled.div`
    font-size: 24px;
    margin-bottom: 0;
`;

const Headline = styled.div`
    margin-top: 0;
    margin-bottom: 5px;
    font-size: 18px;
`;

const Thumb = styled.img`
    width: 200px;
    margin: auto;
`;

export default withRouter(VideoThumbnail);
