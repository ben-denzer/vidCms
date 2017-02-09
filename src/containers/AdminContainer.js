import {connect}            from 'react-redux';
import {dePopulateBlogForm} from '../actions/formActions';
import {getAdminData, putCommentInTrash} from '../actions/adminActions';
import AdminPage            from '../components/AdminPage';

const mapStateToProps = (state) => {
    return {
        user                : state.user,
        admin               : state.user.admin,
        allData             : state.admin.adminData,
        commentTrashCan     : state.trashCan.commentTrashCan
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAdminData:           (token) => dispatch(getAdminData(token, dispatch)),
        putCommentInTrash:      (token, id, trash, comments) => {
                                    dispatch(putCommentInTrash(token, id, trash, comments))
                                },
        dePopulateBlogForm:     () => dispatch(dePopulateBlogForm())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);