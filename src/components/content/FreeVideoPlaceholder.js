import React from 'react';
import {browserHistory} from 'react-router';
import videoPlaceholderImg from '../../img/video-placeholder.jpg';

const FreeVideo = (props) => {
    const {title, headline, text, id} = props;
    return (
        <div className="free-video-container">
            <h3>{title}</h3>
            <h4>{headline}</h4>
            <img onClick={() => browserHistory.push(`/free/${id}`)} src={videoPlaceholderImg} alt="click to see video" />
            <div className="free-video-text">{text}</div>
        </div>
    );
};

export default FreeVideo;
