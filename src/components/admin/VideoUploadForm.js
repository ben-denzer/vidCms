import React from 'react';
import TextInput from '../shared/TextInput';
import MyEditor from './children/MyEditor';
import DragDrop from './children/DragDrop';
import {RadioBox, RadioCol, FormLabel, UploadBox, UploadPage} from '../../styles/adminFormStyles';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state              = {inputFile: [], premium: false};

        this.handleFileUpload   = this.handleFileUpload.bind(this);
        this.submit             = this.submit.bind(this);
        this.toggleFree         = this.toggleFree.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        nextProps.clearForms && this.setState({inputFile: []});
    }
    componentWillUnmount() {
        this.props.clearAdminForm();
    }
    handleFileUpload(inputFile) {
        if (this.props.clearForms) this.props.removeClearForms();
        this.setState({inputFile})
    }
    submit(e) {
        e.preventDefault();
        const {editorHtml, token, uploadTitleVal, uploadHeadlineVal, youtubeUrlVal} = this.props;

        if (!this.state.premium) {
            this.props.submitUploadFree({
                editorHtml,
                token,
                uploadTitleVal,
                uploadHeadlineVal,
                youtubeUrlVal
            });
        } else {
            this.props.submitUploadPremium({
                editorHtml,
                token,
                uploadTitleVal,
                uploadHeadlineVal,
                videoInputFile: this.state.inputFile[0]
            });
        }
    }
    toggleFree(premium) {
        this.setState({premium});
    }
    render() {
        const {premium, inputFile} = this.state;
        const {
            handleTextChange,
            uploadHeadlineVal,
            uploadTitleVal,
            youtubeUrlVal
        } = this.props;

        return (
            <UploadPage>
                <h1>Upload</h1>
                <UploadBox>
                    <RadioBox>
                        <RadioCol>
                            <FormLabel>
                                Free Youtube Video
                            </FormLabel>
                            <FormLabel>
                                Premium Video
                            </FormLabel>
                        </RadioCol>
                        <RadioCol>
                            <input
                                type="radio"
                                name="freeVid"
                                onChange={() => this.toggleFree(false)}
                                checked={!premium}
                            />
                            <input
                                type="radio"
                                name="freeVid"
                                onChange={() => this.toggleFree(true)}
                                checked={premium}
                            />
                        </RadioCol>
                    </RadioBox>
                    <div>
                        {!premium ?
                            <TextInput
                                id="youtubeUrl"
                                val={youtubeUrlVal}
                                handleChange={handleTextChange}
                            /> :
                            <DragDrop
                                inputFile={inputFile}
                                handleFileUpload={this.handleFileUpload}
                            />
                        }
                    </div>
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
                    <FormLabel className="text-input">Text</FormLabel>
                    <MyEditor />
                    <button onClick={this.submit}>Submit</button>
                </UploadBox>
            </UploadPage>
        );
    }
}

export default UploadForm;