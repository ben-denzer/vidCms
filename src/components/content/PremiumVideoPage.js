import React from 'react';
import {connect} from 'react-redux';
import {getPremiumVideo, clearCurrentVideo} from '../../actions/contentActions';
import VideoBlock from './VideoBlock';
import Upgrade from './Upgrade';

class PremiumVideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
        this.getVideo = this.getVideo.bind(this);
    }
    componentWillMount() {
        this.props.premium_user && this.getVideo();
    }
    componentDidUpdate(prevProps) {
        !prevProps.premium_user && this.props.premium_user && this.getVideo();
    }
    componentWillUnmount() {
        this.props.clearCurrentVideo();
    }
    createMarkup() {
        if (/<script/.test(this.props.text.toString()) || !this.props.premium_user) return {__html: ''}
        return {__html: this.props.text.toString()};
    }
    getVideo() {
        this.props.getPremiumVideo(this.props.params.id, this.props.token);
    }
    render() {
        const {title, headline, url, premium_user} = this.props;
        const fullUrl = 'http://localhost:8000/uploads/' + url;
        return (
            <div id="video_page">
                <h1>{title}</h1>
                <h2 id="video_headline">{headline}</h2>
                <div>{url && premium_user ? <VideoBlock premium_user={premium_user} fullUrl={fullUrl} /> : <Upgrade />}</div>
                <div id="video_text" dangerouslySetInnerHTML={this.createMarkup()} />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        premium_user:   state.user.premium,
        token:          state.user.token,
        title:          state.content.currentVideo.video_title,
        headline:       state.content.currentVideo.video_headline,
        url:            state.content.currentVideo.video_url,
        text:           state.content.currentVideo.video_text
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getPremiumVideo: (id, token) => dispatch(getPremiumVideo(id, token, dispatch)),
        clearCurrentVideo: () => dispatch(clearCurrentVideo())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PremiumVideoPage);