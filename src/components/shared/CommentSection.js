import React            from 'react';
import {withRouter}     from 'react-router-dom';
import {parseDate}      from '../../logic/shared';

const CommentSection = props => {
    const {comments, submitComment, token, handleChange, commentVal} = props;
    let eachComment = ['no comments'];
    if (comments && comments.length) {
        eachComment = comments.map((a, i) => {
            return <div key={i++} className="commentContainer">
                <div className="comment-name">{a.username}</div>
                <div className="comment-date">{parseDate(a.comment_date)}</div>
                <div className="comment-main">{a.comment_text}</div>
            </div>
        });
    }
    return (
        <div id="comment_section_container">
            <div id="comment_section">
                <h5 id="comment_header">Comments</h5>
                {eachComment}
            </div>
            <div id="comment_editor_container">
                <p id="add_comment">Add Comment</p>
                {
                    token ?
                        <textarea onChange={handleChange} id="comment_editor" value={commentVal} /> :
                        <p>
                            <span className="link" onClick={() => props.push("auth/login")}>
                                Log In</span> or <span className="link" onClick={() => props.push("auth/signup")}>
                                Sign Up</span> to Comment
                        </p>
                }
                {token && <button onClick={submitComment}>Submit</button>}
            </div>
        </div>
    );
};

export default withRouter(CommentSection);