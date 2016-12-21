import React from 'react';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import {getAdminData, putCommentInTrash} from '../actions/adminActions';

class AdminPage extends React.Component {
    componentWillMount() {
        this.props.admin && this.props.getAdminData(this.props.user.token);
        this.removeComment = this.removeComment.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        !this.props.admin && nextProps.admin && this.props.getAdminData(nextProps.user.token);
    }
    removeComment(e) {
        const {commentTrashCan, user, allData} = this.props;
        this.props.putCommentInTrash(user.token, e.target.id.slice(7), commentTrashCan, allData.comments);
    }
    render() {
        if (!this.props.admin) return <div id="admin_page">Log In To Continue</div>
        const {users, comments, videos} = this.props.allData;
        console.log('adminPage render - comments', comments,'trash', this.props.commentTrashCan);
        return (
            <div id="admin_page">
                <div id="admin_sidebar">
                    <div className="admin-button" onClick={() => browserHistory.push('/admin/upload')}>Upload Videos</div>
                    <div className="admin-button" onClick={() => browserHistory.push('/admin/users')}>Manage Users</div>
                </div>
                <div id="admin_main">
                    {this.props.children && React.cloneElement(this.props.children,
                        {
                            users,
                            comments,
                            videos,
                            removeComment: this.removeComment,
                            commentTrashCan: this.props.commentTrashCan
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
        allData: state.admin.adminData,
        commentTrashCan: state.trashCan.commentTrashCan
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdminData: (token) => dispatch(getAdminData(token, dispatch)),
        putCommentInTrash: (token, id, trash, comments) => dispatch(putCommentInTrash(token, id, trash, comments))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);