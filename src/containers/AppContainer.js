import {connect}    from 'react-redux';
import {logout}     from '../actions/authActions';
import App          from '../components/App';

const mapStateToProps = state => {
    const {allBlogs, allImages, allVideos} = state.content;
    const {success, error, info, pendingApiCalls} = state.message;
    const {username} = state.user;

    return {
        username,
        allBlogs,
        allImages,
        allVideos,
        success,
        error,
        info,
        pendingApiCalls
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);