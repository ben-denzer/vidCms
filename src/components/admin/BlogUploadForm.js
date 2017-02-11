import React from 'react';
import TextInput from '../shared/TextInput';
import MyEditor from './children/MyEditor';
import DragDrop from './children/DragDrop';
import {apiUrl} from '../../.keys';
import {UploadImage, UploadImageContainer, UploadBox, UploadPage} from '../../styles/adminFormStyles';

class BlogUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
        this.submit = this.submit.bind(this);
        this.state = {inputFile: []};
    }
    // componentWillMount() {
    //     const {params, blogs, images} = this.props;
    //     if (params.blog_post_url) {
    //         const thisBlog = blogs.filter(a => a.blog_post_url === params.blog_post_url)[0];
    //         const thisImageUrl = images.filter(a => a.blog_fk === params.blog_post_url)[0].image_url;
    //         const blogAndImage = Object.assign({}, thisBlog, {image_url: thisImageUrl});
    //         this.props.populateBlogForm(blogAndImage);
    //     }
    // }
    componentWillUnmount() {
        this.props.dePopulateBlogForm();
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
        const {blogTitleVal, blogHeadlineVal, blogImageUrl} = this.props;
        return (
            <UploadPage>
                <h1>Blog</h1>
                <UploadBox>
                    <DragDrop
                        file={this.state.inputFile}
                        handleUpload={this.handleUpload}
                    />
                    {
                        blogImageUrl &&
                            <UploadImageContainer>
                                <UploadImage src={`${apiUrl}${blogImageUrl}`} role="presentation" />
                            </UploadImageContainer>
                    }
                    <TextInput
                        id="blogTitle"
                        label="Title"
                        val={blogTitleVal}
                        handleChange={this.handleChange}
                    />
                    <TextInput
                        id="blogHeadline"
                        label="Headline"
                        val={blogHeadlineVal}
                        handleChange={this.handleChange}
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