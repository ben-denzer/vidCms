import React                from 'react';
import {Route}              from 'react-router-dom';
import styled               from 'styled-components';
import BlogUploadForm       from './admin/BlogUploadForm';
import VideoUploadForm      from './admin/VideoUploadForm';

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
        if (!this.props.admin) return <AdminContainer>Log In To Continue</AdminContainer>
        const {
            allData,
            blogImageUrl,
            clearForms,
            editorHtml,
            error,
            handleTextChange,
            removeClearForms,
            submitBlog,
            submitUploadFree,
            submitUploadPremium,
            uploadHeadlineVal,
            uploadTitleVal,
            videoTitleVal,
            videoHeadlineVal,
            youtubeUrlVal
        } = this.props;
        const {/*users, comments, videos,*/ blogs, images} = allData;

        return (
            <AdminContainer>
                <AdminSidebar>
                    <AdminButton onClick={() => this.props.push('/admin/upload/video')}>
                        Upload Videos
                    </AdminButton>
                    <AdminButton onClick={() => this.props.push('/admin/upload/blog')}>
                        Upload Blog
                    </AdminButton>
                    <AdminButton onClick={() => this.props.push('/admin/users')}>
                        Manage Users
                    </AdminButton>
                    <AdminButton onClick={() => this.props.push('/admin/edit/blogs/')}>
                        Edit Post
                    </AdminButton>
                </AdminSidebar>
                <AdminMain>
                    <Route path='/admin/upload/blog'
                        render={() => {
                            return (
                                <BlogUploadForm
                                    blogImageUrl={blogImageUrl}
                                    blogs={blogs}
                                    clearForms={clearForms}
                                    editorHtml={editorHtml}
                                    error={error}
                                    handleTextChange={handleTextChange}
                                    images={images}
                                    removeClearForms={removeClearForms}
                                    submitBlog={submitBlog}
                                    uploadTitleVal={uploadTitleVal}
                                    uploadHeadlineVal={uploadHeadlineVal}
                                />
                            );
                        }}
                    />
                    <Route path='/admin/upload/video'
                        render={() => {
                            return (
                                <VideoUploadForm
                                    videoTitleVal={videoTitleVal}
                                    videoHeadlineVal={videoHeadlineVal}
                                    error={error}
                                    handleTextChange={handleTextChange}
                                    submitUploadFree={submitUploadFree}
                                    submitUploadPremium={submitUploadPremium}
                                    editorHtml={editorHtml}
                                    youtubeUrlVal={youtubeUrlVal}
                                />
                            );
                        }}
                    />
                </AdminMain>
            </AdminContainer>
        );
    }
}

const AdminContainer = styled.div`
    width: 99%;
    margin; 0 auto;
    display: flex;

    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

const AdminSidebar = styled.div`
    width: 200px;
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    border-right: 2px solid black;

    @media (max-width: 600px) {
        width: 100%;
        flex-flow: row wrap;
        justify-content: center;
        border-right: 0;
        border-bottom: 1px solid black;
    }
`;

const AdminButton = styled.div`
    font-size: 18px;
    padding: 5px 15px;

    &:hover {
        color: blue;
        text-decoration: underline;
        cursor: pointer;
    }
`;

const AdminMain = styled.div`
    width: calc(100% - 200px);

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export default AdminPage;