import {connect}                            from 'react-redux';
import {logout}                             from '../actions/authActions';
import App                                  from '../components/App';
import {addLocationToHistory}               from '../actions/routeActions';
import {handleTextChange}                   from '../actions/formActions';
import {submitChangePw}                     from '../actions/authActions';

const mapStateToProps = state => {
    const {allBlogs, allImages, allVideos}          = state.content;
    const {success, error, info, pendingApiCalls}   = state.message;
    const lastRoute                                 = state.route[0];

    return {
        allBlogs,
        allImages,
        allVideos,
        error,
        forms: state.forms,
        info,
        lastRoute,
        pendingApiCalls,
        success,
        user: state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addLocationToHistory  : pathname => dispatch(addLocationToHistory(pathname)),
        handleTextChange      : (e, {id, value} = e.target) => dispatch(handleTextChange(id, value)),
        logout                : () => dispatch(logout()),
        submitChangePw        : (e) => dispatch(submitChangePw(e))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);