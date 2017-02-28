import React        from 'react';
import styled       from 'styled-components';
import premiumOnly  from '../../img/premium_placeholder.jpg';

const PremiumVidBox = props => {
    if (!props.premium_user) {
        return <img src={premiumOnly} alt="Log in or sign up to see this video" />
    }
    console.log(props.fullUrl);
    return (
        <VideoBox controls>
            <source src={props.fullUrl} />
            Your browser does not support the video tag.
        </VideoBox>
    );
};

const VideoBox = styled.video`
    width: 560px;
    height: 315px;
    max-width: 99%;
`;

export default PremiumVidBox;