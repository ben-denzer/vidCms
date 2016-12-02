import React from 'react';
import {browserHistory} from 'react-router';
import {parseDate} from '../../logic/shared';

const CommentSection = (props) => {
    const {video_comments, submitComment, token, handleChange, commentVal} = props;
    let comments = ['no comments'];
    if (video_comments && video_comments.length) {
        comments = video_comments.map((a, i) => {
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
                {comments}
            </div>
            <p id="add_comment">Add Comment</p>
            <div id="comment_editor_container">
                {
                    token ?
                        <textarea onChange={handleChange} id="comment_editor" value={commentVal} /> :
                        <p>
                            <span className="link" onClick={() => browserHistory.push("auth/login")}>Log In</span> or
                            <span className="link" onClick={() => browserHistory.push("auth/signup")}>Sign Up</span> to Comment
                        </p>
                }
                <button onClick={submitComment}>Submit</button>
            </div>
        </div>
    );
};

export default CommentSection;