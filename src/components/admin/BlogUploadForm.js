import React from 'react';
import styled from 'styled-components';
import TextInput from '../shared/TextInput';
import MyEditor from './children/MyEditor';
import DragDrop from './children/DragDrop';

const apiUrl = process.env['NODE_ENV'] === 'development' ?
    'http://localhost:8000/uploads/' :
    'https://bdenzer.xyz/blog/uploads/';

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

const UploadPage = styled.div`
    width: 95%;
    background-color: #fff;
    margin: 0 auto;
    padding: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const UploadBox = styled.form`
    width: 100%;
`;

const UploadImageContainer = styled.div`
    width: 100%;
    text-align: right;
`;

const UploadImage = styled.img`
    height: 200px;
    width: auto;
`;

export default BlogUploadForm;