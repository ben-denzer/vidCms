import React from 'react';
import {parseDate} from '../../logic/shared';

class ManageUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: this.props.users,
            select: 'old-new',
            radio: 'allUsers'
        };
        this.handleRadioChange = this.handleRadioChange.bind(this);
        this.filter = this.filter.bind(this);
        this.handleSort=  this.handleSort.bind(this);
        this.sort = this.sort.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if (!this.state.users.length && nextProps.users.length) {
            this.setState({users: nextProps.users});
        }
    }
    handleSort(e) {
        this.setState({select: e.target.value});
        this.sort();
    }
    handleRadioChange(e) {
        this.setState({radio: e.target.id});
        this.filter(e.target.id);
    }
    filter(type = this.state.select) {
        let newSet;
        switch(type) {
            case 'allUsers':
                newSet = this.props.users.filter(a => a);
                break;
            case 'free':
                newSet = this.props.users.filter(a => !a.premium);
                break;
            case 'premium':
                newSet = this.props.users.filter(a => a.premium);
                break;
            default:
                break;
        }
        this.setState({users: newSet});
        this.sort(newSet);
    }
    sort(users = this.state.users) {
        let newSet;
        switch(this.state.select) {
            case 'A-Z':
                newSet = users.sort((a,b) => a.username.toUpperCase() < b.username.toUpperCase());
                break;
            case 'Z-A':
                newSet = users.sort((a,b) => a.username.toUpperCase() > b.username.toUpperCase());
                break;
            case ('new-old'):
                newSet = users.sort((a,b) => a.signup_date > b.signup_date);
                break;
            case 'old-new':
                newSet = users.sort((a,b) => a.signup_date < b.signup_date);
                break;
            default:
                break;
        }
        this.setState({users: newSet});
    }
    render() {
        const {radio, select, users} = this.state;
        let rows = <tr><td colSpan="8">No Data</td></tr>
        console.log(this.props);
        if (users && users.length) {
            rows = users.map(a => {
                return (
                    <tr key={a.user_id}>
                        <td>{a.username}</td>
                        <td>{a.email}</td>
                        <td>{parseDate(a.signup_date)}</td>
                        <td>{a.admin ? 'yes' : 'no'}</td>
                        <td>{a.premium ? 'yes' : 'no'}</td>
                    </tr>
                );
            });
        }
        return (
            <div id="manage_users">
                <h1>Users</h1>
                <div id="user_sortbox">
                    <div id="user_radio">
                        <label>
                            <input
                                type="radio"
                                id="allUsers"
                                checked={radio === 'allUsers'}
                                onChange={this.handleRadioChange}
                            />
                            All Users
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="premium"
                                checked={radio === 'premium'}
                                onChange={this.handleRadioChange}
                            />
                            Premium Members
                        </label>
                        <label>
                            <input
                                type="radio"
                                id="free"
                                checked={radio === 'free'}
                                onChange={this.handleRadioChange}
                            />
                            Free Users
                        </label>
                    </div>
                    <select id="user-sort" className="admin-sort" value={this.state.select} onChange={this.handleSort}>
                        <option value="old-new">Oldest to Newest</option>
                        <option value="new-old">Newest to Oldest</option>
                        <option value="A-Z">A-Z</option>
                        <option value="Z-A">Z-A</option>
                    </select>
                </div>
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Username</th>
                            <th>Email</th>
                            <th>Member Since</th>
                            <th>Admin</th>
                            <th>Premium Member</th>
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default ManageUsers;