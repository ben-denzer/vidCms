import React from 'react';
import TextInput from '../shared/TextInput';
import MyEditor from './children/MyEditor';
import DragDrop from './children/DragDrop';
import {RadioBox, RadioCol, FormLabel, UploadBox, UploadPage} from '../../styles/adminFormStyles';

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
                                checked={!this.state.premium}
                            />
                            <input
                                type="radio"
                                name="freeVid"
                                onChange={() => this.toggleFree(true)}
                                checked={this.state.premium}
                            />
                        </RadioCol>
                    </RadioBox>
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
                        label="Title"
                        val={this.props.videoTitleVal}
                        handleChange={this.handleChange}
                    />
                    <TextInput
                        id="videoHeadline"
                        label="Headline"
                        val={this.props.videoHeadlineVal}
                        handleChange={this.handleChange}
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