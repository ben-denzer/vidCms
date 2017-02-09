import {connect}            from 'react-redux';
import {getAdminData, putCommentInTrash} from '../actions/adminActions';
import {handleTextChange, submitBlog, populateBlogForm, dePopulateBlogForm} from '../actions/formActions';

import AdminPage            from '../components/AdminPage';

const mapStateToProps = (state) => {
    return {
        user                : state.user,
        admin               : state.user.admin,
        allData             : state.admin.adminData,
        commentTrashCan     : state.trashCan.commentTrashCan,
        blogTitleVal        : state.forms.blogTitleVal,
        blogHeadlineVal     : state.forms.blogHeadlineVal,
        blogImageUrl        : state.forms.blogImageUrl,
        error               : state.message.error
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dePopulateBlogForm:     () => dispatch(dePopulateBlogForm()),
        getAdminData:           (token) => dispatch(getAdminData(token, dispatch)),
        handleTextChange:       (inputId, inputVal) => dispatch(handleTextChange(inputId, inputVal)),
        putCommentInTrash:      (token, id, trash, comments) => {
                                    dispatch(putCommentInTrash(token, id, trash, comments))
                                },
        populateBlogForm:       (options) => dispatch(populateBlogForm(options)),
        submitBlog:             (options) => dispatch(submitBlog(options, dispatch)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);