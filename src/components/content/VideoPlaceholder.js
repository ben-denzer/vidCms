import React from 'react';
import {browserHistory} from 'react-router';

const VideoPlaceholder = (props) => {
    const {title, headline, id, placeholder_url} = props;
    return (
        <div className="content-placeholder-container">
            <div>
                <h2>{title}</h2>
                <h3>{headline}</h3>
            </div>
            <div>
                <img
                    onClick={() => browserHistory.push(`/watch/${props.premium_video ? 'premium' : 'free'}/${id}`)}
                    src={placeholder_url}
                    alt="click to see video"
                />
            </div>
        </div>
    );
};

export default VideoPlaceholder;
