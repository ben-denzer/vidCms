import React            from 'react';
import styled           from 'styled-components';
import parseDate        from '../../logic/parseDate';

class CommentBlock extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.submitComment = this.submitComment.bind(this);
    }

    componentWillMount() {
        const postPath = location.pathname;
        const postType = /watch/.test(postPath) ? 'video' : 'blog';
        const post_fk = postPath.slice(postPath.lastIndexOf('/') + 1);
        this.setState({postType, post_fk});
    }

    handleChange(e) {
        this.props.handleTextChange('comment', e.target.value);
    }

    filterComments() {
        const {post_fk} = this.state;
        return this.props.allComments.filter(a => {
            return a.blog_fk === post_fk || a.video_fk === post_fk;
        });
    }

    submitComment() {
        if (!this.props.commentVal) return;
        const {username, token, commentVal} = this.props;
        const {postType, post_fk} = this.state;
        this.props.submitComment({
            username,
            token,
            post_fk,
            [postType]: post_fk,
            comment:    commentVal
        });
    }

    render() {
        const {token, commentVal} = this.props;
        const filteredComments = this.filterComments();
        let eachComment = ['no comments'];
        if (filteredComments && filteredComments.length) {
            eachComment = filteredComments.map(a => {
                return (
                    <CommentContainer key={`${a.username}${Math.random()}`} className="commentContainer">
                        <Name className="comment-name">{a.username}</Name>
                        <Date className="comment-date">
                            {a.comment_date ? parseDate(a.comment_date) : 'now'}
                        </Date>
                        <Main className="comment-main">{a.comment_text}</Main>
                    </CommentContainer>
                );
            });
        }
        return (
            <CommentSectionContainer id="comment_section_container">
                <CommentSection id="comment_section">
                    <CommentHeader id="comment_header">Comments</CommentHeader>
                    {eachComment}
                </CommentSection>
                <CommentEditorContainer id="comment_editor_container">
                    <Add id="add_comment">Add Comment</Add>
                    {
                        token ?
                            <CommentTextArea 
                                onChange={this.handleChange} 
                                id="comment_editor" 
                                value={commentVal} 
                            /> :
                            <p>
                                <AuthLink className="link" onClick={() => this.props.push('/auth/login')}>
                                    Log In</AuthLink> or <AuthLink className="link" onClick={() => this.props.push('/auth/signup')}>
                                    Sign Up</AuthLink> to Comment
                            </p>
                    }
                    {token && <SubmitButton onClick={this.submitComment}>Submit</SubmitButton>}
                </CommentEditorContainer>
            </CommentSectionContainer>
        );
    }
}

const CommentSectionContainer = styled.div`
    width: 60%;
    padding: 0;

    @media (max-width: 900px) {
        width: 90%;
    }
    @media (max-width: 600px) {
        width: 99%;
    }
`;

const CommentContainer = styled.div``;
const CommentSection = styled.div``;

const CommentHeader = styled.h3`
    margin-top: 50px;
    font-size: 26px;
    font-weight: bold;
    text-align: left;
    text-decoration: underline;
`;

const Date = styled.div`
    display: inline-block;
`;

const Name = styled.div`
    display: inline-block;
    font-weight: bold;
    margin-right: 10px;
    margin-bottom: 5px;
`;

const Main = styled.div`
    margin-bottom: 15px;
`;

const CommentEditorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Add = styled.p`
    align-self: flex-start;
    margin-top: 50px;
    font-size: 18px;
    font-weight: bold;
`;

const CommentTextArea = styled.textarea`
    width: 100%;
    height: 100px;
    margin: 0 auto;
`;

const AuthLink = styled.span`
    color: blue;

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

const SubmitButton = styled.button`
    margin-top: 10px;
    align-self: flex-end;
`;

export default CommentBlock;