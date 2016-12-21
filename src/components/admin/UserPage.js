import React from 'react';
import {parseDate} from '../../logic/shared';

const UserPage = (props) => {
    const {users, comments, videos, params, removeComment} = props;
    const thisUser = users.length && users.filter(a => a.user_id.toString() === params.id.toString())[0];
    let rows = <tr><td colSpan="4">No Comments Found</td></tr>;

    if (comments && comments.length) {
        const temp = comments.filter(a => a.user_fk.toString() === params.id.toString());
        if (temp.length) {
            rows = temp.map(comment => {
                const videoName = videos.filter(vid => vid.video_id === comment.video_fk)[0].video_title;
                return (
                    <tr key={comment.comment_id}>
                        <td>{parseDate(comment.comment_date)}</td>
                        <td>{videoName}</td>
                        <td>{comment.comment_text}</td>
                        <td className="remove-comment" id={`comment${comment.comment_id}`}onClick={removeComment} />
                    </tr>
                );
            });
        }
    }

    return (
        <div id="user_page">
            <h1>{thisUser.username}</h1>
            <div id="user_dataBox">
                {thisUser.admin ? <h4>Administrator Account</h4> : null}
                <p><strong>Signup Date:</strong> {parseDate(thisUser.signup_date)}</p>
                {
                    thisUser.premium ?
                        <div>
                            <p>
                                <strong>Premium Member Since: </strong>
                                {thisUser.premium_signup_date ? parseDate(thisUser.premium_signup_date) : 'N/A'}
                            </p>
                            <p>
                                <strong>Premium Expiration: </strong>
                                {thisUser.premium_expiration_date ? parseDate(thisUser.premium_expiration_date) : 'N/A'}
                            </p>
                        </div>
                    : null
                }
                <p><strong>Comments</strong></p>
            </div>
            <table id="comments_table" className="admin-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Video</th>
                        <th>Comment</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {rows}
                </tbody>
            </table>
        </div>
    );
};

export default UserPage;