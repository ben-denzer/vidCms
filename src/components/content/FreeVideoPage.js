import React from 'react';
import {connect} from 'react-redux';
import {getFreeVideo} from '../../actions/contentActions';

class FreeVideoPage extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
    }
    componentDidMount() {
        this.props.getFreeVideo(this.props.params.id);
    }
    createMarkup() {
        const text = this.props;
        if (/<script/.test(text)) return {__html: ''}
        return {__html: this.props.text.toString()};
    }
    render() {
        const {title, headline, url} = this.props;
        return (
            <div id="free_video_page">
                <h1>{title}</h1>
                <h2 id="free_video_headline">{headline}</h2>
                <iframe width="560" height="315" src={url} frameBorder="0" allowFullScreen></iframe>
                <div id="free_video_text" dangerouslySetInnerHTML={this.createMarkup()} />
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