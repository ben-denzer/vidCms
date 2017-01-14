import React from 'react';
import { connect } from 'react-redux';
import VideoPlaceholder from '../components/content/VideoPlaceholder';

const VideoHome = (props) => {
    let videos = [];

    if (props.videos.length) {
        videos = props.videos.map(a => {
            return <VideoPlaceholder
                key={a.video_title}
                id={a.video_id}
                title={a.video_title || ''}
                headline={a.video_headline || ''}
                text={a.video_text || ''}
                premium_video={a.premium}
                video_date={a.video_date}
                placeholder_url={a.placeholder_url}
            />
        });
    }

    return (
        <div id="video_page_container">
            <h1>Our Videos</h1>
            {videos}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        videos: state.content.allVideos
    };
};

export default connect(mapStateToProps)(VideoHome);
