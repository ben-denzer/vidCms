import {connect}                            from 'react-redux';
import {getAdminData, putCommentInTrash}    from '../actions/adminActions';
import AdminPage                            from '../components/AdminPage';
import {
    clearAdminForm,
    handleTextChange,
    submitBlog,
    populateBlogForm,
    submitUploadFree,
    submitUploadPremium
} from '../actions/formActions';

const mapStateToProps = (state) => ({
    user                : state.user,
    admin               : state.user.admin,
    allData             : state.admin.adminData,
    commentTrashCan     : state.trashCan.commentTrashCan,
    blogImageUrl        : state.forms.blogImageUrl,
    editorHtml          : state.forms.editorHtml,
    error               : state.message.error,
    uploadTitleVal      : state.forms.uploadTitleVal,
    uploadHeadlineVal   : state.forms.uploadHeadlineVal,
    youtubeUrlVal       : state.forms.youtubeUrlVal,
});

const mapDispatchToProps = (dispatch) => ({
    clearAdminForm:         () => dispatch(clearAdminForm()),
    getAdminData:           (token) => dispatch(getAdminData(token, dispatch)),
    handleTextChange:       (e) => dispatch(handleTextChange(e.target.id, e.target.value)),
    putCommentInTrash:      (token, id, trash, comments) => {
                                dispatch(putCommentInTrash(token, id, trash, comments))
                            },
    populateBlogForm:       (options) => dispatch(populateBlogForm(options)),
    submitBlog:             (options) => dispatch(submitBlog(options, dispatch)),
    submitUploadFree:       (options) => dispatch(submitUploadFree(options, dispatch)),
    submitUploadPremium:    (options) => dispatch(submitUploadPremium(options, dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
