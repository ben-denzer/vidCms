import React from 'react';
import premiumOnly from '../../img/premium_placeholder.jpg';

const PremiumVidBox = props => {
    if (!props.premium_user) {
        return <img src={premiumOnly} alt="Log in or sign up to see this video" />
    }
    return (
        <video id="premium_video_container" controls>
            <source src={props.fullUrl} />
            Your browser does not support the video tag.
        </video>
    );
};

export default PremiumVidBox;