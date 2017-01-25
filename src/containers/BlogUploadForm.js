import React from 'react';
import {connect} from 'react-redux';
import TextInput from '../components/share/TextInput';
import MyEditor from '../components/admin/MyEditor';
import {handleTextChange, submitBlog, populateBlogForm} from '../actions/formActions';
import DragDrop from '../components/admin/DragDrop';

const apiUrl = process.env['NODE_ENV'] === 'development' ?
    'http://localhost:8000/uploads/' :
    'https://bdenzer.xyz/blog/uploads/';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {inputFile: []};
    }
    componentWillMount() {
        const {params, blogs} = this.props;
        if (params.blog_post_url) {
            const thisBlog = blogs.filter(a => a.blog_post_url === params.blog_post_url)[0];
            this.props.populateBlogForm(thisBlog);
        }
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
        let blogImageUrl = '';
        if (this.props.images.length) {
            const thisImage = this.props.images.filter(a => a.blog_fk === this.props.params.blog_post_url)[0].image_url;
            if (thisImage) blogImageUrl = thisImage;
        }
        return (
            <div id="upload_page">
                <h1>Blog</h1>
                <form className="upload-box">
                    <DragDrop
                        file={this.state.inputFile}
                        handleUpload={this.handleUpload}
                    />
                    {blogImageUrl && <img src={`${apiUrl}${blogImageUrl}`} role="presentation" />}
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
                    <MyEditor startingText={this.props.editorHtml} />
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
        populateBlogForm: (options) => dispatch(populateBlogForm(options)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadForm);