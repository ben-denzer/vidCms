import React                                from 'react';
import {withRouter}                         from 'react-router-dom';
import styled                               from 'styled-components';
import parseDate                            from '../../logic/parseDate';
import {normalizeComments, /*sortComments*/}    from '../../logic/sortComments';
import {
    AdminRight,
    AdminTable,
    AdminTitle,
    SortContainer,
    /*SortRadioContainer,
    SectionHeader,
    TableCell,*/
    TableHeader,
    //TableRow
} from '../../styles/adminTableStyles';

class SingleUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy          : 'new-old',
            sortedComments  : [],
            user            : null,
            userComments    : []
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
            console.log('in componentWillReceiveProps', comments, blogs, videos);
            this.filterComments(comments, blogs, videos);
        }
    }
    filterComments(allComments, blogs, videos, id = this.props.match.params.id) {
        const rawComments = allComments.filter(a => Number(a.user_fk) === Number(id));
        normalizeComments(rawComments, blogs, videos)
            .then(userComments => this.setState({userComments}))
            .catch(err => console.log('error in normalizeComments'));
    }
    findUser(allUsers, id = this.props.match.params.id) {
        const user = allUsers.filter(a => Number(a.user_id) === Number(id))[0];
        this.setState({user});
    }
    sortComments(comments = this.props.comments, sortBy = this.state.sortBy) {
        return;
    }
    render() {
        const {sortBy, user} = this.state;
        const rows = [];
        console.log('userComments', this.state.userComments);
        if (!user) {
            return (
                <AdminRight>
                    <AdminTitle>User Not Found</AdminTitle>
                </AdminRight>
            )
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
                        <option value="A-Z">Posts A-Z</option>
                        <option value="Z-A">Posts Z-A</option>
                        <option value="old-new">Oldest to Newest</option>
                        <option value="new-old">Newest to Oldest</option>
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