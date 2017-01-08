import React from 'react';
import VideoPlaceholder from '../content/VideoPlaceholder';

const RecentVideos = (props) => {
    let videos = [];
    if (props.allVideos.length) {
        videos = props.allVideos.slice(0,3).map(a => {
            return <VideoPlaceholder
                key={a.video_id}
                id={a.video_id}
                title={a.video_title || ''}
                headline={a.video_headline || ''}
                text={a.video_text || ''}
                premium_video={a.premium}
                date={a.video_date}
                placeholder_url={a.placeholder_url}
            />
        });
    }
    return (
        <div id="recent_videos_container">
            <div id="recent_videos">
                {videos || 'Error Loading Recent Videos, Please Refresh Your Browser'}
            </div>
        </div>
    );
};

export default RecentVideos;