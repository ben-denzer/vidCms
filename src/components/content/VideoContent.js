import React from 'react';

const VideoContent = (props) => {
    const {title, headline, url, createMarkup} = this.props;
    return (
        <div>
            <h1>{title}</h1>
            <h2 id="free_video_headline">{headline}</h2>
            <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen />
            <div id="free_video_text" dangerouslySetInnerHTML={createMarkup} />
        </div>
    )
};

export default VideoContent;