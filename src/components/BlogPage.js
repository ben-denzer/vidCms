import React from 'react';
import {connect} from 'react-redux';
import {createMarkup} from '../logic/shared';
import {handleTextChange} from '../actions/formActions.js';
import {submitComment, getBlogComments} from '../actions/commentActions';
import RecentPosts from './content/RecentPosts';
import CommentSection from './content/CommentSection';

const apiUrl = process.env['NODE_ENV'] === 'development' ?
    'http://localhost:8000/uploads/' :
    'https://bdenzer.xyz/blog/uploads/';

class BlogPage extends React.Component {
    constructor(props) {
        super(props);
        this.createMarkup = this.createMarkup.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }
    componentWillMount() {
        this.props.getBlogComments(this.props.params.post_url);
    }
    createMarkup() {
        const text = this.props;
        if (/<script/.test(text)) return {__html: ''}
        return {__html: this.props.text.toString()};
    }
    handleChange(e) {
        this.props.handleTextChange('comment', e.target.value);
    }
    submitComment() {
        this.props.submitComment({
            name: this.props.name,
            token: this.props.token,
            video: null,
            blog: this.props.params.post_url,
            comment: this.props.commentVal
        });
    }
    render() {
        // Set currentPost to empty strings to wait for api to return if needed
        let currentPost = {
            blog_id: '',
            blog_title: '',
            blog_headline: '',
            blog_text: '',
        }
        if (this.props.allBlogs.length) {
            currentPost = this.props.allBlogs.filter(a => a.blog_post_url === this.props.params.post_url)[0];
        }
        const {blog_id, blog_title, blog_headline, blog_text} = currentPost;

        // Set default image to JS logo hosted on main domain, check for custom blog image
        let blogImageUrl = 'https://bdenzer.com/images/js.png';
        if (this.props.allImages.length) {
            const customImage = this.props.allImages.filter(a => a.blog_fk === blog_id)[0];

            if (customImage) blogImageUrl = `${apiUrl}${customImage.image_url}`;
        }

        const {token, blog_comments, commentVal} = this.props;
        console.log(this.props.allBlogs);
        return (
            <div id="blog_page_container">
                <div id="blog_header_container">
                    <h1>{blog_title}</h1>
                    <h2>{blog_headline}</h2>
                </div>
                <div id="blog_post_container">
                    <div className="fakeAd" />
                    <div id="blog_image_container"><img src={blogImageUrl} alt={blog_title} /></div>
                    <div id="blog_text" dangerouslySetInnerHTML={createMarkup(blog_text)} />
                    <RecentPosts allBlogs={this.props.allBlogs} />
                    <div className="fakeAd" />
                    <CommentSection
                        comments={blog_comments}
                        token={token}
                        submitComment={() => this.submitComment(blog_id)}
                        handleChange={(e) => this.handleChange(e)}
                        commentVal={commentVal}
                    />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        allBlogs:       state.content.allBlogs,
        allImages:      state.content.allImages,
        name:           state.user.name,
        token:          state.user.token,
        blog_comments:  state.comments,
        commentVal:     state.forms.commentVal
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleTextChange:   (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        submitComment:      (options) => dispatch(submitComment(options, dispatch)),
        getBlogComments:    (blog_id) => dispatch(getBlogComments(blog_id, dispatch))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogPage);