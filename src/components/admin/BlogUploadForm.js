import React from 'react';
import TextInput from '../shared/TextInput';
import MyEditor from './children/MyEditor';
import DragDrop from './children/DragDrop';
import {apiUrl} from '../../.keys';
import {UploadImage, UploadImageContainer, UploadBox, UploadPage} from '../../styles/adminFormStyles';

class BlogUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {inputFile: []};
        this.submit = this.submit.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }
    componentWillUnmount() {
        this.props.clearAdminForm();
    }
    componentWillReceiveProps(nextProps) {
        nextProps.clearForms && this.setState({inputFile: []});
    }
    handleFileUpload(inputFile) {
        if (this.props.clearForms) this.props.removeClearForms();
        this.setState({inputFile})
    }
    submit(e) {
        e.preventDefault();
        const {editorHtml, submitBlog, uploadTitleVal, uploadHeadlineVal} = this.props;

        submitBlog({
            uploadTitleVal,
            uploadHeadlineVal,
            inputFile: this.state.inputFile[0],
            editorHtml,
        });
    }
    render() {
        const {
            blogImageUrl,
            handleTextChange,
            uploadTitleVal,
            uploadHeadlineVal
        } = this.props;

        return (
            <UploadPage>
                <h1>Blog</h1>
                <UploadBox>
                    <DragDrop
                        inputFile={this.state.inputFile}
                        handleFileUpload={this.handleFileUpload}
                    />
                    {
                        blogImageUrl &&
                            <UploadImageContainer>
                                <UploadImage src={`${apiUrl}${blogImageUrl}`} role="presentation" />
                            </UploadImageContainer>
                    }
                    <TextInput
                        id="uploadTitle"
                        label="Title"
                        val={uploadTitleVal}
                        handleChange={handleTextChange}
                    />
                    <TextInput
                        id="uploadHeadline"
                        label="Headline"
                        val={uploadHeadlineVal}
                        handleChange={handleTextChange}
                    />
                    <label className="text-input"><span>Text</span></label>
                    <MyEditor />
                    <button onClick={this.submit}>Submit</button>
                </UploadBox>
            </UploadPage>
        );
    }
}

export default BlogUploadForm;