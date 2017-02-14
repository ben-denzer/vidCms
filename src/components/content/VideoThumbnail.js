import React        from 'react';
import {withRouter} from 'react-router-dom';
import styled       from 'styled-components';

const VideoThumbnail = (props) => {
    const {title, headline, id, placeholder_url, premium_video} = props;
    return (
        <VideoThumbnailContainer>
            <Heading>
                <Title>{title}</Title>
                <Headline>{headline}</Headline>
            </Heading>
            <ImgBox>
                <Thumb
                    onClick={() => props.push(`/watch/${premium_video ? 'premium' : 'free'}/${id}`)}
                    src={placeholder_url}
                    alt="click to see video"
                />
            </ImgBox>
        </VideoThumbnailContainer>
    );
};

const VideoThumbnailContainer = styled.div`
    width: 250px;
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
`;

const Heading = styled.div``;
const ImgBox = styled.div``;

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
