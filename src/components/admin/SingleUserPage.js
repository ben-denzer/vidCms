import React                                from 'react';
import {withRouter}                         from 'react-router-dom';
import styled                               from 'styled-components';
import parseDate                            from '../../logic/parseDate';
import {normalizeComments, sortComments}    from '../../logic/sortComments';
import AdminDeleteModal                     from '../shared/AdminDeleteModal';
import {
    AdminRight,
    AdminTable,
    AdminTitle,
    SortContainer,
    TableCell,
    TableHeader,
    TableRow
} from '../../styles/adminTableStyles';

class SingleUserPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal       : false,
            sortBy          : 'oldNew',
            sortedComments  : [],
            user            : null,
        }

        this.banUser        = this.banUser.bind(this);
        this.closeModal     = this.closeModal.bind(this);
        this.filterComments = this.filterComments.bind(this);
        this.findUser       = this.findUser.bind(this);
        this.sortComments   = this.sortComments.bind(this);
    }

    componentWillMount() {
        if (this.props.users) {
            this.findUser(this.props.users);
        }
        if (this.props.comments.length) {
            const {blogs, comments, videos} = this.props;
            this.filterComments(comments, blogs, videos);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.users.length && nextProps.users.length) {
            this.findUser(nextProps.users);
        }
        if (this.props.comments.length !== nextProps.comments.length) {
            const {blogs, comments, videos} = nextProps;
            this.filterComments(comments, blogs, videos);
        }
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

    filterComments(allComments, blogs, videos, id = this.props.match.params.id) {
        const rawComments = allComments.filter(a => Number(a.user_fk) === Number(id));
        this.setState({sortedComments: normalizeComments(rawComments, blogs, videos)});
    }

    findUser(allUsers, id = this.props.match.params.id) {
        const user = allUsers.filter(a => Number(a.user_id) === Number(id))[0];
        this.setState({user});
    }

    showDeleteModal(commentId, user, func = this.banUser) {
        this.setState({ showModal: true });
    }

    sortComments(e, sortBy = e.target.value, comments = this.state.sortedComments) {
        this.setState({sortedComments: sortComments(comments, sortBy), sortBy});
    }

    render() {
        const {showModal, sortBy, sortedComments, user} = this.state;

        if (!user) {
            return (
                <AdminRight>
                    <AdminTitle>User Not Found</AdminTitle>
                </AdminRight>
            )
        }

        let rows = [<TableRow key={0}><TableCell colSpan='4'>No Comments Found</TableCell></TableRow>];
        if (sortedComments && sortedComments.length) {
            rows = sortedComments.map(a => (
                <TableRow key={a.id} onClick={() => this.props.push(`/admin/comments/${a.id}`)}>
                    <TableCell>
                        {a.postTitle.length > 50 ? a.postTitle.slice(0, 30) + '...' : a.postTitle}
                    </TableCell>
                    <TableCell>{parseDate(a.date)}</TableCell>
                    <TableCell>
                        {a.text.length > 30 ? a.text.slice(0, 30) + '...' : a.text}
                    </TableCell>
                </TableRow>
            ));
        }

        return (
            <AdminRight>
                <AdminTitle>{user.username}</AdminTitle>
                {
                    user.banned_user ?
                        <BannedUser>Banned</BannedUser> :
                        <AdminButton 
                            onClick={() => this.showDeleteModal(null, user.user_id)}
                        >
                            Ban User
                        </AdminButton>
                }
                <InfoContainer>
                    <InfoLeft>
                        <InfoHeading>Email</InfoHeading>
                        <InfoHeading>Signup Date</InfoHeading>
                        <InfoHeading>Admin</InfoHeading>
                        <InfoHeading>Premium</InfoHeading>
                    </InfoLeft>
                    <InfoRight>
                        <InfoText>{user.email || "-none-"}</InfoText>
                        <InfoText>{parseDate(user.signup_date)}</InfoText>
                        <InfoText>{user.admin ? 'yes' : 'no'}</InfoText>
                        <InfoText>{user.premium ? 'yes' : 'no'}</InfoText>
                    </InfoRight>
                </InfoContainer>

                <AdminTitle>Comments</AdminTitle>

                <SortContainer>
                    <select id="user-sort" className="admin-sort" value={sortBy} onChange={(e) => this.sortComments(e)}>
                        <option value="postsAZ">Posts A-Z</option>
                        <option value="postsZA">Posts Z-A</option>
                        <option value="oldNew">Oldest to Newest</option>
                        <option value="newOld">Newest to Oldest</option>
                    </select>
                </SortContainer>
                <AdminTable>
                    <thead>
                        <tr>
                            <TableHeader>Post Title</TableHeader>
                            <TableHeader>Comment Date</TableHeader>
                            <TableHeader>Comment</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </AdminTable>
                <AdminDeleteModal
                    closeModal={this.closeModal}
                    commentId={null}
                    modalFunction={this.banUser}
                    show={showModal}
                    userId={user.user_id}
                />
            </AdminRight>
        );
    }
}

const AdminButton = styled.button`
    margin: 10px;
    max-width: 150px;
`;

const BannedUser = styled.div`
    font-size: 28px;
    max-width: 500px;
    color: white;
    background-color: red;
    padding: 5px;
    margin: 15px auto 15px 0;
    text-align: center;
`;

const InfoContainer = styled.div`
    display: flex;
`;

const InfoHeading = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

const InfoLeft = styled.div``;

const InfoRight = styled.div`
    margin-left: 15px;
`;

const InfoText = styled.div`
    font-size: 18px;
`;

export default withRouter(SingleUserPage);