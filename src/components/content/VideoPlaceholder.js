import React from 'react';
import {browserHistory} from 'react-router';
import videoPlaceholderImg from '../../img/video-placeholder.jpg';

const VideoPlaceholder = (props) => {
    const {title, headline, id} = props;
    return (
        <div className="video-placeholder-container">
            <h2>{title}</h2>
            <h3>{headline}</h3>
            <div>{props.premium_video ? <span className="premium-only">Premium Members Only</span> : ""}</div>
            <img
                onClick={() => browserHistory.push(`/watch/${props.premium_video ? 'premium' : 'free'}/${id}`)}
                src={videoPlaceholderImg}
                alt="click to see video"
            />
        </div>
    );
};

export default VideoPlaceholder;
