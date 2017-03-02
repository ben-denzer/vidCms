import React            from 'react';
import {withRouter}     from 'react-router';
import parseDate        from '../../logic/parseDate';
import userSort         from '../../logic/userSort';
import {
    AdminMain,
    AdminTable,
    AdminTitle,
    SortContainer,
    SortRadioContainer,
    TableCell,
    TableHeader,
    TableRow
} from '../../styles/adminTableStyles';

class ManageUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            sortBy: 'A-Z',
            filterBy: 'allUsers'
        };
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.handleSort=  this.handleSort.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        const {users, sortBy, filterBy} = this.state;
        if (!users.length && nextProps.users.length) {
            userSort(nextProps.users, sortBy, filterBy)
                .then(users => this.setState({users}));
        }
    }
    handleSort(e) {
        const tempVal = e.target.value;
        userSort(this.props.users, e.target.value, this.state.filterBy)
            .then(users => this.setState({users, sortBy: tempVal}));
    }
    handleRadioChange(e) {
        const tempVal = e.target.id;
        userSort(this.props.users, this.state.sortBy, e.target.id)
            .then(users => this.setState({users, filterBy: tempVal}));
    }
    render() {
        const {sortBy, filterBy, users} = this.state;
        let rows = <tr><td colSpan="8">No Data</td></tr>
        if (users && users.length) {
            rows = users.map(a => {
                return (
                    <TableRow key={a.user_id} onClick={() => this.props.push(`/admin/users/${a.user_id}`)}>
                        <TableCell>{a.username}</TableCell>
                        <TableCell>{a.email}</TableCell>
                        <TableCell>{parseDate(a.signup_date)}</TableCell>
                        <TableCell>{a.admin ? 'yes' : 'no'}</TableCell>
                        <TableCell>{a.premium ? 'yes' : 'no'}</TableCell>
                    </TableRow>
                );
            });
        }
        return (
            <AdminMain>
                <AdminTitle>Users</AdminTitle>
                <SortContainer>
                    <SortRadioContainer>
                        <label>
                            <input
                                type="radio"
                                id="allUsers"
                                checked={filterBy === 'allUsers'}
                                onChange={this.handleRadioChange}
                            />
                            All Users
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="premium"
                                checked={filterBy === 'premium'}
                                onChange={this.handleRadioChange}
                            />
                            Premium Members
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="free"
                                checked={filterBy === 'free'}
                                onChange={this.handleRadioChange}
                            />
                            Free Users
                        </label>
                    </SortRadioContainer>
                    <select id="user-sort" className="admin-sort" value={sortBy} onChange={this.handleSort}>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
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
            </AdminMain>
        );
    }
};

export default withRouter(ManageUsers);