import React from 'react';
import { connect } from 'react-redux';
import {getAllVideos} from '../actions/contentActions';

class HomePage extends React.Component {
    componentDidMount() {
        this.props.getAllVideos();
    }
    render() {
        let videos;
        if (this.props.videos.length) {
            videos = this.props.videos.map(a => {
                return a.premium ? 'prem' : 'free';
            });
        }
        return (
            <div>{videos}</div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        user: state.user.name,
        videos: state.content.allVideos
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllVideos: () => dispatch(getAllVideos(dispatch))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
