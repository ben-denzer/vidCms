import React from 'react';

const VideoBlock = (props) => {
    return (
        <video id="premium_video_container" controls>
            <source src={props.fullUrl} />
            Your browser does not support the video tag.
        </video>
    );
};

export default VideoBlock;