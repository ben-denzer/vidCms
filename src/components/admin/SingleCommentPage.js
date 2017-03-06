import React                    from 'react'
import {withRouter}             from 'react-router-dom';
import styled                   from 'styled-components';
import {normalizeComments}      from '../../logic/sortComments';
import parseDate                from '../../logic/parseDate';
import {AdminRight, AdminTitle} from '../../styles/adminTableStyles';

const SingleCommentPage = props => {
    const {blogs, comments, match, users, videos} = props;

    const thisComment = comments && comments.length ? 
        props.comments.filter(a => a.comment_id === Number(match.params.id)) :
        [];

    if (!thisComment.length) return <AdminRight><AdminTitle>Comment Not Found</AdminTitle></AdminRight>;

    const thisUser = users.filter(a => thisComment[0].user_fk === a.user_id)[0];
    const comment = normalizeComments(thisComment, blogs, videos)[0];

    return (
        <AdminRight>
            <AdminTitle>Comment</AdminTitle>
            <InfoContainer>
                <div>
                    <InfoHeading>User: </InfoHeading>
                    <InfoText>{thisUser.username || 'Not Found'}</InfoText>
                </div>
                <div>
                    <InfoHeading>Post: </InfoHeading>
                    <InfoText>{comment.postTitle || 'Not Found'}</InfoText>
                </div>
                <div>
                    <InfoHeading>Date: </InfoHeading>
                    <InfoText>{parseDate(comment.date) || 'Not Found'}</InfoText>
                </div>
                <div>
                    <InfoHeading>Text: </InfoHeading>
                    <InfoText>{comment.text || 'Not Found'}</InfoText>
                </div>
            </InfoContainer>
        </AdminRight>
    );
};

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const InfoHeading = styled.span`
    width: 20%;
    font-size: 18px;
    font-weight: bold;
    display: inline;
`;

const InfoText = styled.span`
    width: 70%;
    font-size: 18px;
`;


export default withRouter(SingleCommentPage);