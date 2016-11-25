import React from 'react';
import {browserHistory} from 'react-router';
import videoPlaceholderImg from '../../img/video-placeholder.jpg';

const VideoPlaceholder = (props) => {
    const {title, headline, id} = props;
    return (
        <div className="video-placeholder-container">
            <h3>{title}</h3>
            <h4>{headline}</h4>
            <div className="premium-only">{props.premium && "Premium Members Only"}</div>
            <img onClick={() => browserHistory.push(`/watch/${id}`)} src={videoPlaceholderImg} alt="click to see video" />
        </div>
    );
};

export default VideoPlaceholder;
