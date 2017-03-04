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
                <InfoLeft>
                    <InfoHeading>User</InfoHeading>
                    <InfoHeading>Post</InfoHeading>
                    <InfoHeading>Date</InfoHeading>
                    <InfoHeading>Text</InfoHeading>
                </InfoLeft>
                <InfoRight>
                    <InfoText>{thisUser.username || 'Not Found'}</InfoText>
                    <InfoText>{comment.postTitle || 'Not Found'}</InfoText>
                    <InfoText>{parseDate(comment.date) || 'Not Found'}</InfoText>
                    <InfoText>{comment.text || 'Not Found'}</InfoText>
                </InfoRight>
            </InfoContainer>
        </AdminRight>
    );
};

const InfoContainer = styled.div`
    display: flex;
`;

const InfoLeft = styled.div``;
const InfoRight = styled.div`
    margin-left: 15px;
`;

const InfoHeading = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const InfoText = styled.div`
    font-size: 18px;
`;


export default withRouter(SingleCommentPage);