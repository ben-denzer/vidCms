import React                                from 'react';
import {withRouter}                         from 'react-router-dom';
import styled                               from 'styled-components';
import parseDate                            from '../../logic/parseDate';
import {normalizeComments, sortComments}    from '../../logic/sortComments';
import {
    AdminRight,
    AdminTable,
    AdminTitle,
    SortContainer,
    /*SortRadioContainer,
    SectionHeader,*/
    TableCell,
    TableHeader,
    TableRow
} from '../../styles/adminTableStyles';

class SingleUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy          : 'newOld',
            sortedComments  : [],
            user            : null,
        }
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
        if (!this.props.comments.length && nextProps.comments.length) {
            const {blogs, comments, videos} = nextProps;
            this.filterComments(comments, blogs, videos);
        }
    }
    filterComments(allComments, blogs, videos, id = this.props.match.params.id) {
        const rawComments = allComments.filter(a => Number(a.user_fk) === Number(id));
        normalizeComments(rawComments, blogs, videos)
            .then(userComments => this.sortComments(userComments))
            .catch(err => console.log('error in normalizeComments'));
    }
    findUser(allUsers, id = this.props.match.params.id) {
        const user = allUsers.filter(a => Number(a.user_id) === Number(id))[0];
        this.setState({user});
    }
    sortComments(comments = this.props.comments, sortBy = this.state.sortBy) {
        this.setState({sortedComments: sortComments(comments, sortBy)});
    }
    render() {
        const {sortBy, user, sortedComments} = this.state;

        if (!user) {
            return (
                <AdminRight>
                    <AdminTitle>User Not Found</AdminTitle>
                </AdminRight>
            )
        }

        let rows = [<TableRow key={0}><TableCell colSpan='4'>No Comments Found</TableCell></TableRow>];
        if (sortedComments.length) {
            rows = sortedComments.map(a => (
                <TableRow key={a.id}>
                    <TableCell>{a.postTitle}</TableCell>
                    <TableCell>{parseDate(a.date)}</TableCell>
                    <TableCell>{a.text}</TableCell>
                    <TableCell> X </TableCell>
                </TableRow>
            ));
        }

        return (
            <AdminRight>
                <AdminTitle>{user.username}</AdminTitle>
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
                    <select id="user-sort" className="admin-sort" value={sortBy} onChange={this.sortComments}>
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
                            <TableHeader>Delete</TableHeader>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </AdminTable>
            </AdminRight>
        );
    }
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

export default withRouter(SingleUser);