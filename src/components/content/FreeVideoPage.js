import React from 'react';
import {connect} from 'react-redux';
import {getFreeVideo} from '../../actions/contentActions';

class FreeVideoPage extends React.Component {
    componentDidMount() {
        this.props.getFreeVideo(this.props.params.id);
    }
    render() {
        const {title, headline, url, text} = this.props;
        console.log(title);
        return (
            <div>
                <h1>{title}</h1>
                <strong>{headline}</strong>
                <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
                <div>{text || ''}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        title: state.content.currentVideo.video_title,
        headline: state.content.currentVideo.video_headline,
        url: state.content.currentVideo.video_url,
        text: state.content.currentVideo.video_text
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getFreeVideo: (id) => dispatch(getFreeVideo(id, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FreeVideoPage);