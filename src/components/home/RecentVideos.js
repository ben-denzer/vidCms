import React from 'react';
import VideoPlaceholder from '../content/VideoPlaceholder';

const RecentVideos = (props) => {
    let videos = [];
    if (props.allVideos.length) {
        videos = props.allVideos.slice(0,3).map(a => {
            return <VideoPlaceholder
                key={a.video_title}
                id={a.video_id}
                title={a.video_title || ''}
                headline={a.video_headline || ''}
                text={a.video_text || ''}
                premium_video={a.premium}
                date={a.video_date}
            />
        });
    }
    return (
        <div id="recent_videos_container">
            <h2>Recent Videos</h2>
            <div id="recent_videos">
                {videos || 'Nothing to show'}
            </div>
        </div>
    );
};

export default RecentVideos;