import React from 'react';
import {connect} from 'react-redux';
import TextInput from '../components/share/TextInput';
import MyEditor from '../components/admin/MyEditor';
import {handleTextChange, submitUploadFree, submitUploadPremium} from '../actions/formActions';
import DragDrop from '../components/admin//DragDrop';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.submit = this.submit.bind(this);
        this.toggleFree = this.toggleFree.bind(this);
        this.state = {videoInputFile: [], premium: false};
    }
    handleChange(e) {
        this.props.handleTextChange(e.target.id, e.target.value);
    }
    handleUpload(arr) {
        this.setState({videoInputFile: arr});
    }
    submit(e) {
        e.preventDefault();
        const {videoTitleVal, videoHeadlineVal, editorHtml, youtubeUrlVal} = this.props;
        if (!this.state.premium) {
            this.props.submitUploadFree({
                videoTitleVal,
                videoHeadlineVal,
                editorHtml,
                youtubeUrlVal
            });
        } else {
            this.props.submitUploadPremium({
                videoTitleVal,
                videoHeadlineVal,
                videoInputFile: this.state.videoInputFile[0],
                editorHtml,
            });
        }
        this.setState({videoInputFile: []});
    }
    toggleFree(premium) {
        this.setState({premium});
    }
    render() {
        return (
            <div id="upload_page">
                <h1>Upload</h1>
                <form className="upload-box">
                    <div className="error-box">{this.props.error || 'no error'}</div>
                    <div className="radio-box">
                        <div className="radio-col">
                            <label>
                                Free Youtube Video
                            </label>
                            <label>
                                Premium Video
                            </label>
                        </div>
                        <div className="radio-col">
                            <input
                                type="radio"
                                name="freeVid"
                                onChange={() => this.toggleFree(false)}
                                checked={!this.state.premium}
                            />
                            <input
                                type="radio"
                                name="freeVid"
                                onChange={() => this.toggleFree(true)}
                                checked={this.state.premium}
                            />
                        </div>
                    </div>
                    <div>
                        {!this.state.premium ?
                            <TextInput
                                id="youtubeUrl"
                                val={this.props.youtubeUrlVal}
                                handleChange={this.handleChange}
                            /> :
                            <DragDrop
                                file={this.state.videoInputFile}
                                handleUpload={this.handleUpload}
                            />
                        }
                    </div>
                    <TextInput
                        id="videoTitle"
                        val={this.props.videoTitleVal}
                        handleChange={this.handleChange}
                    />
                    <TextInput
                        id="videoHeadline"
                        val={this.props.videoHeadlineVal}
                        handleChange={this.handleChange}
                    />
                    <label className="text-input"><span>Text</span></label>
                    <MyEditor />
                    <button onClick={this.submit}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        videoTitleVal: state.forms.videoTitleVal,
        videoHeadlineVal: state.forms.videoHeadlineVal,
        editorHtml: state.forms.editorHtml,
        youtubeUrlVal: state.forms.youtubeUrlVal,
        error: state.message.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTextChange: (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        submitUploadFree: (options) => dispatch(submitUploadFree(options, dispatch)),
        submitUploadPremium: (options) => dispatch(submitUploadPremium(options, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);