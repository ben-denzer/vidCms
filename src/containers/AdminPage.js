import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {getAdminData} from '../actions/adminActions';

class AdminPage extends React.Component {
    componentWillMount() {
        console.log('adminPage', 'mounting')
        this.props.admin && this.props.getAdminData(this.props.user.token);
    }
    componentWillReceiveProps(nextProps) {
        !this.props.admin && nextProps.admin && this.props.getAdminData(nextProps.user.token);
    }
    render() {
        console.log(this.props.user);
        if (!this.props.admin) return <div>Log In To Continue</div>
        return (
            <div id="admin_page">
                <div className="admin-button" onClick={() => browserHistory.push('admin/upload')}>Upload Videos</div>
                <div className="admin-button" onClick={() => browserHistory.push('admin/users')}>Manage Users</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        admin: state.user.admin,
        route: state.routing
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdminData: (token) => dispatch(getAdminData(token, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);