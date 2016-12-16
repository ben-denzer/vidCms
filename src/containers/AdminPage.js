import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {getAdminData} from '../actions/adminActions';

class AdminPage extends React.Component {
    componentWillMount() {
        this.props.admin && this.props.getAdminData(this.props.user.token);
    }
    componentWillReceiveProps(nextProps) {
        !this.props.admin && nextProps.admin && this.props.getAdminData(nextProps.user.token);
    }
    render() {
        if (!this.props.admin) return <div id="admin_page">Log In To Continue</div>
        return (
            <div id="admin_page">
                <div id="admin_sidebar">
                    <div className="admin-button" onClick={() => browserHistory.push('/admin/upload')}>Upload Videos</div>
                    <div className="admin-button" onClick={() => browserHistory.push('/admin/users')}>Manage Users</div>
                </div>
                <div id="admin_main">
                    {this.props.children && React.cloneElement(this.props.children,
                        {
                            users: this.props.allData.users,
                            comments: this.props.allData.comments,
                            videos: this.props.allData.videos
                        }
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user,
        admin: state.user.admin,
        allData: state.admin.adminData
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdminData: (token) => dispatch(getAdminData(token, dispatch))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);