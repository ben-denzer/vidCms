import React from 'react';
import { connect } from 'react-redux';
import {getAllVideos} from '../actions/contentActions'
import FreeVideoPlaceholder from '../components/content/FreeVideoPlaceholder';

class VideoPage extends React.Component {
    componentDidMount() {
        this.props.getAllVideos();
    }
    render() {
        let videos = [];
        if (this.props.videos.length) {
            videos = this.props.videos.map(a => {
                return <FreeVideoPlaceholder
                    key={a.video_title}
                    id={a.video_id}
                    title={a.video_title || ''}
                    headline={a.video_headline || ''}
                    text={a.video_text || ''}
                />
            });
        }
        return (
            <div>{videos}</div>
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
