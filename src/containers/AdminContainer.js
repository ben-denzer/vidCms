import {connect}                                from 'react-redux';
import {banUser, deleteComments, getAdminData}  from '../actions/adminActions';
import AdminPage                                from '../components/AdminPage';
import {
    clearAdminForm,
    handleTextChange,
    submitBlog,
    populateBlogForm,
    removeClearForms,
    submitUploadFree,
    submitUploadPremium
} from '../actions/formActions';

const mapStateToProps = (state) => ({
    user                : state.user,
    token               : state.user.token,
    admin               : state.user.admin,
    allData             : state.admin,
    clearForms          : state.forms.clearForms,
    blogImageUrl        : state.forms.blogImageUrl,
    editorHtml          : state.forms.editorHtml,
    error               : state.message.error,
    uploadTitleVal      : state.forms.uploadTitleVal,
    uploadHeadlineVal   : state.forms.uploadHeadlineVal,
    youtubeUrlVal       : state.forms.youtubeUrlVal,
});

const mapDispatchToProps = (dispatch) => ({
    banUser:                (options) => dispatch(banUser(options)),
    clearAdminForm:         () => dispatch(clearAdminForm()),
    deleteComments:         (options) => dispatch(deleteComments(options)),
    getAdminData:           (token) => dispatch(getAdminData(token, dispatch)),
    handleTextChange:       (e) => dispatch(handleTextChange(e.target.id, e.target.value)),
    populateBlogForm:       (thisBlog) => dispatch(populateBlogForm(thisBlog)),
    removeClearForms:       () => dispatch(removeClearForms()),
    submitBlog:             (options) => dispatch(submitBlog(options, dispatch)),
    submitUploadFree:       (options) => dispatch(submitUploadFree(options, dispatch)),
    submitUploadPremium:    (options) => dispatch(submitUploadPremium(options, dispatch))
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
