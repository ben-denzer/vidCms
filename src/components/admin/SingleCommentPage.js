import React                    from 'react'
import {withRouter}             from 'react-router-dom';
import styled                   from 'styled-components';
import {normalizeComments}      from '../../logic/sortComments';
import parseDate                from '../../logic/parseDate';
import {AdminRight, AdminTitle} from '../../styles/adminTableStyles';
import BootstrapModal           from '../shared/BootstrapModal';

class SingleCommentPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: false,
            modalTarget: null,  // 'user' or 'comment'
            modalTargetId: null,
            modalFunction: null,
        };

        this.showDeleteComment  = this.showDeleteComment.bind(this);
        this.deleteComment      = this.deleteComment.bind(this);
    }

    deleteComment(id) {
        console.log(id);
        //this.props.deleteComments([id]);
    }

    showDeleteComment(id) {
        this.setState({
            showModal: true,
            modalTarget: 'comment',
            modalTargetId: id,
            modalFunction: this.deleteComment 
        });
    }

    render() {
        const {blogs, comments, match, users, videos} = this.props;
        const {showModal, modalTarget, modalTargetId, modalFunction} = this.state;

        const thisComment = comments && comments.length ? 
            comments.filter(a => a.comment_id === Number(match.params.id)) :
            [];

        if (!thisComment.length) return <AdminRight><AdminTitle>Comment Not Found</AdminTitle></AdminRight>;

        const thisUser = users.filter(a => thisComment[0].user_fk === a.user_id)[0];
        const comment = normalizeComments(thisComment, blogs, videos)[0];
        console.log(this.state);
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
                        <AdminButton onClick={this.showDeleteComment}>Delete Comment</AdminButton>
                        <AdminButton onClick={() => {}}>Ban User</AdminButton>
                    </ButtonContainer>
                    <BootstrapModal 
                        show={showModal}
                        modalTarget={modalTarget}
                        modalTargetId={modalTargetId}
                        modalFunction={modalFunction}
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