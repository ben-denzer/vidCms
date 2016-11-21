import React from 'react';
import {connect} from 'react-redux';
import TextInput from '../components/share/TextInput';
import MyEditor from '../components/admin/MyEditor';
import {handleTextChange, submitUpload} from '../actions/formActions';
import DragDrop from '../components/admin//DragDrop';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {videoInputFile: []};
    }
    handleChange(e) {
        this.props.handleTextChange(e.target.id, e.target.value);
    }
    handleUpload(arr) {
        this.setState({videoInputFile: arr});
    }
    submit(e) {
        e.preventDefault();
        const {videoTitleVal, videoHeadlineVal, editorHtml} = this.props;
        this.props.submitUpload({videoTitleVal, videoHeadlineVal, videoInputFile: this.state.videoInputFile[0], editorHtml});
        this.setState({videoInputFile: []});
    }
    render() {
        console.log('videoTitleVal', this.props.videoTitleVal);
        return (
            <div>
                <h1>Upload</h1>
                <form className="formBox">
                    <DragDrop
                        file={this.state.videoInputFile}
                        handleUpload={this.handleUpload}
                    />
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
        editorHtml: state.forms.editorHtml
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTextChange: (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        submitUpload: (options) => dispatch(submitUpload(options, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);