import {connect}                from 'react-redux';
import {logout}                 from '../actions/authActions';
import App                      from '../components/App';
import {addLocationToHistory}   from '../actions/routeActions';

const mapStateToProps = state => {
    const {allBlogs, allImages, allVideos}          = state.content;
    const {success, error, info, pendingApiCalls}   = state.message;
    const {username}                                = state.user;
    const lastRoute                                 = state.route[0];

    return {
        username,
        allBlogs,
        allImages,
        allVideos,
        success,
        error,
        info,
        pendingApiCalls,
        lastRoute
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        addLocationToHistory: pathname => dispatch(addLocationToHistory(pathname))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);