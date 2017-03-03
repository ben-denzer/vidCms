import React        from 'react';
import {withRouter} from 'react-router-dom';
import styled       from 'styled-components';
import parseDate    from '../../logic/parseDate';
import {
    AdminRight,
    AdminTable,
    AdminTitle,
    SortContainer,
    SortRadioContainer,
    SectionHeader,
    TableCell,
    TableHeader,
    TableRow
} from '../../styles/adminTableStyles';

class SingleUser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: null, sortBy: 'new-old'}
        this.findUser = this.findUser.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }
    componentWillMount() {
        if (this.props.users) {
            this.findUser(this.props.match.params.id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (!this.props.users.length && nextProps.users.length) {
            this.findUser(this.props.match.params.id);
        }
    }
    findUser(id) {
        console.log(this.props.users, id);
        const user = this.props.users.filter(a => a.user_id === Number(id))[0];
        this.setState({user});
    }
    handleSort(param) {
        return;
    }
    render() {
        const {sortBy, user} = this.state;
        const rows = [];

        if (!user) {
            return (
                <AdminRight>
                    <AdminTitle>{user.username}</AdminTitle>
                </AdminRight>
            )
        }

        return (
            <AdminRight>
                <AdminTitle>{user.username}</AdminTitle>
                <InfoContainer>
                    <InfoLeft>
                        <InfoHeading>Username</InfoHeading>
                        <InfoHeading>Email</InfoHeading>
                        <InfoHeading>Signup Date</InfoHeading>
                        <InfoHeading>Admin</InfoHeading>
                        <InfoHeading>Premium</InfoHeading>
                    </InfoLeft>
                    <InfoRight>
                        <InfoText>{user.username}</InfoText>
                        <InfoText>{user.email || "-none-"}</InfoText>
                        <InfoText>{parseDate(user.signup_date)}</InfoText>
                        <InfoText>{user.admin ? 'yes' : 'no'}</InfoText>
                        <InfoText>{user.premium ? 'yes' : 'no'}</InfoText>
                    </InfoRight>
                </InfoContainer>

                <AdminTitle>Comments</AdminTitle>

                <SortContainer>
                    <select id="user-sort" className="admin-sort" value={sortBy} onChange={this.handleSort}>
                        <option value="A-Z">Posts A-Z</option>
                        <option value="Z-A">Posts Z-A</option>
                        <option value="old-new">Oldest to Newest</option>
                        <option value="new-old">Newest to Oldest</option>
                    </select>
                </SortContainer>
                <AdminTable>
                    <thead>
                        <tr>
                            <TableHeader>Username</TableHeader>
                            <TableHeader>Email</TableHeader>
                            <TableHeader>Member Since</TableHeader>
                            <TableHeader>Admin</TableHeader>
                            <TableHeader>Premium Member</TableHeader>
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