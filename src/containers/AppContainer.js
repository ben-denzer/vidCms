import {connect}                from 'react-redux';
import {logout}                 from '../actions/authActions';
import App                      from '../components/App';
import {addLocationToHistory}   from '../actions/routeActions';

const mapStateToProps = state => {
    const {allBlogs, allImages, allVideos}          = state.content;
    const {success, error, info, pendingApiCalls}   = state.message;
    const {username}                                = state.user;
    const lastRoute                                 = state.route[0];

    console.log(state.user);

    return {
        allBlogs,
        allImages,
        allVideos,
        error,
        info,
        lastRoute,
        pendingApiCalls,
        success,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout()),
        addLocationToHistory: pathname => dispatch(addLocationToHistory(pathname))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);