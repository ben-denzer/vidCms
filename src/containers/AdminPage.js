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
        const {commentTrashCan, user} = this.props;
        this.props.putCommentInTrash(user.token, e.target.id.slice(7), commentTrashCan);
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
                            videos: this.props.allData.videos,
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
        putCommentInTrash: (token, id, trash) => dispatch(putCommentInTrash(token, id, trash))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);