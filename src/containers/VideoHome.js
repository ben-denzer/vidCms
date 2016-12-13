import React from 'react';
import { connect } from 'react-redux';
import {getAllVideos} from '../actions/contentActions'
import VideoPlaceholder from '../components/content/VideoPlaceholder';

class VideoPage extends React.Component {
    componentDidMount() {
        !this.props.videos.length && this.props.getAllVideos();
    }
    render() {
        let videos = [];
        if (this.props.videos.length) {
            videos = this.props.videos.map(a => {
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
                <h1>Latest Videos</h1>
                {videos}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.content.allVideos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllVideos: () => dispatch(getAllVideos(dispatch))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);
