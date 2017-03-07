import React                    from 'react'
import {withRouter}             from 'react-router-dom';
import styled                   from 'styled-components';
import {normalizeComments}      from '../../logic/sortComments';
import parseDate                from '../../logic/parseDate';
import {AdminRight, AdminTitle} from '../../styles/adminTableStyles';
import AdminDeleteModal         from '../shared/AdminDeleteModal';

class SingleCommentPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            commentId: null,
            modalFunction: null,
            showModal: false,
            userId: null
        };

        this.banUser            = this.banUser.bind(this);
        this.closeModal         = this.closeModal.bind(this);
        this.deleteComment      = this.deleteComment.bind(this);
        this.showDeleteModal    = this.showDeleteModal.bind(this);
    }

    banUser(commentId = null, bannedUser) {
        const {banUser, push, token} = this.props;
        banUser({token, bannedUser});
        this.closeModal();
        push('/admin/users');
    }

    closeModal() {
        this.setState({
            commentId: null,
            modalFunction: null,
            showModal: false,
            userId: null
        });
    }

    deleteComment(commentId, userId) {
        const {deleteComments, push, token} = this.props;
        deleteComments({token, trash: [commentId]});
        this.closeModal();
        push(`/admin/users/${userId}`);
    }

    showDeleteModal(id, user, func) {
        this.setState({
            commentId: id,
            modalFunction: func,
            showModal: true,
            userId: user
        });
    }

    render() {
        const {blogs, comments, match, users, videos} = this.props;
        const {commentId, modalFunction, showModal, userId} = this.state;

        const thisComment = comments && comments.length ? 
            comments.filter(a => a.comment_id === Number(match.params.id)) :
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
                    <ButtonContainer>
                        <AdminButton 
                            onClick={() => this.showDeleteModal(comment.id, thisUser.user_id, this.deleteComment)}
                        >
                            Delete Comment
                        </AdminButton>
                        <AdminButton 
                            onClick={() => this.showDeleteModal(null, thisUser.user_id, this.banUser)}
                        >
                            Ban User
                        </AdminButton>
                    </ButtonContainer>
                    <AdminDeleteModal
                        closeModal={this.closeModal}
                        commentId={commentId}
                        modalFunction={modalFunction}
                        show={showModal}
                        userId={userId}
                    />
                </InfoContainer>
            </AdminRight>
        );
    }
}

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

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
`;

const AdminButton = styled.button`
    margin: 10px;
`;

export default withRouter(SingleCommentPage);