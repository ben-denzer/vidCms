import React from 'react';
import {connect} from 'react-redux';
import TextInput from '../components/share/TextInput';
import MyEditor from '../components/admin/MyEditor';
import {handleTextChange, submitBlog} from '../actions/formActions';
import DragDrop from '../components/admin/DragDrop';

class EditBlogForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {inputFile: []};
    }
    handleChange(e) {
        this.props.handleTextChange(e.target.id, e.target.value);
    }
    handleUpload(arr) {
        this.setState({inputFile: arr});
    }
    submit(e) {
        e.preventDefault();
        const {blogTitleVal, blogHeadlineVal, editorHtml} = this.props;

        this.props.submitBlog({
            blogTitleVal,
            blogHeadlineVal,
            inputFile: this.state.inputFile[0],
            editorHtml,
        });

        this.setState({inputFile: []});
    }

    render() {
        return (
            <div id="upload_page">
                <h1>Blog</h1>
                <form className="upload-box">
                    <DragDrop
                        file={this.state.inputFile}
                        handleUpload={this.handleUpload}
                    />
                    <TextInput
                        id="blogTitle"
                        val={this.props.blogTitleVal}
                        handleChange={this.handleChange}
                    />
                    <TextInput
                        id="blogHeadline"
                        val={this.props.blogHeadlineVal}
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
        blogTitleVal: state.forms.blogTitleVal,
        blogHeadlineVal: state.forms.blogHeadlineVal,
        editorHtml: state.forms.editorHtml,
        error: state.message.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleTextChange: (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        submitBlog: (options) => dispatch(submitBlog(options, dispatch)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBlogForm);