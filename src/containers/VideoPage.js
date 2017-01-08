import React from 'react';
import {connect} from 'react-redux';
import VideoContent from '../components/content/VideoContent';
import Upgrade from '../components/content/Upgrade';

class VideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
        this.state = {currentVideo: {}};
    }
    componentWillMount() {
        const currentVideo = this.props.videos.filter(a => a.video_id === this.props.params.id);
        currentVideo.length ?
            this.setState({currentVideo: currentVideo[0]}) :
            this.setState({currentVideo: {error: 'Page Not Found'}});
    }
    createMarkup() {
        const text = this.props;
        if (/<script/.test(text)) return {__html: ''}
        return {__html: this.props.text.toString()};
    }
    render() {
        const {title, headline, url, text, premium_video} = this.state;
        const needToUpgrade = premium_video && !this.props.premium_member;
        if (!this.state.currentVideo.error) {
            return (
                <div id="free_video_page">
                    {needToUpgrade ?
                        <Upgrade /> :
                        <VideoContent
                            createMarkup={this.createMarkup}
                            title={title} headline={headline}
                            url={url}
                            text={text}
                        />
                    }
                </div>
            );
        } else {
            return <div>Page Not Found</div>
        }
    }
}

const mapStateToProps = (state) => {
    return {
        videos: state.content.allVideos,
        premium_member: state.user.premium
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoPage);