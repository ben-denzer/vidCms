import React            from 'react';
import {withRouter}     from 'react-router-dom';
import {mediaUrl}       from '../../.keys';

import TextInput        from '../shared/TextInput';
import MyEditor         from './children/MyEditor';
import DragDrop         from './children/DragDrop';

import {
    UploadImage,
    UploadImageContainer,
    UploadBox,
    UploadPage
} from '../../styles/adminFormStyles';

class BlogUploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state                  = {inputFile: []};
        this.submit                 = this.submit.bind(this);
        this.handleFileUpload       = this.handleFileUpload.bind(this);
        this.handlePopulateForm     = this.handlePopulateForm.bind(this);
    }
    componentWillMount() {
        const {blogs, clearAdminForm, images, match} = this.props;
        if (match.params.id) {
            if (blogs && blogs.length) {
                this.handlePopulateForm(blogs, images);
            }
        } else {
            clearAdminForm();
        }
    }
    componentWillReceiveProps(nextProps) {
        const {blogs, match} = this.props;
        nextProps.clearForms && this.setState({inputFile: []});
        if (match.params.id) {
            if (!blogs || !blogs.length) {
                if (nextProps.blogs && nextProps.blogs.length) {
                    this.handlePopulateForm(nextProps.blogs, nextProps.images);
                }
            }
        }
    }
    componentWillUnmount() {
        this.props.clearAdminForm();
    }
    handleFileUpload(inputFile) {
        if (this.props.clearForms) this.props.removeClearForms();
        this.setState({inputFile})
    }
    handlePopulateForm(blogs, images) {
        const {match}   = this.props;
        const blogInfo  = blogs.filter(a => {
            return Number(a.blog_id) === Number(match.params.id);
        })[0];
        const thisImg   = images.filter(a => a.blog_fk === blogInfo.blog_id);
        const thisBlog  = thisImg.length ?
            Object.assign({}, blogInfo, {image_url: thisImg[0].image_url}) :
            blogInfo;
        this.props.populateBlogForm(thisBlog);
    }
    submit(e) {
        e.preventDefault();
        const {
            changeBlogImage,
            editBlog,
            editorHtml,
            match,
            submitBlog,
            token,
            uploadTitleVal,
            uploadHeadlineVal
        } = this.props;

        if (/upload/.test(location.pathname)) {
            submitBlog({
                uploadTitleVal,
                uploadHeadlineVal,
                inputFile: this.state.inputFile[0],
                editorHtml,
                token
            });
        } else {
            editBlog({
                blogId: match.params.id,
                uploadTitleVal,
                uploadHeadlineVal,
                editorHtml,
                token
            });
            if (this.state.inputFile[0]) {
                //changeBlogImage({inputFile: this.state.inputFile[0], token});
            }
        }
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
                                <UploadImage src={`${mediaUrl}${blogImageUrl}`} role="presentation" />
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

export default withRouter(BlogUploadForm);
