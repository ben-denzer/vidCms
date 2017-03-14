import {connect}                            from 'react-redux';
import {logout}                             from '../actions/authActions';
import App                                  from '../components/App';
import {addLocationToHistory}               from '../actions/routeActions';
import {handleTextChange}                   from '../actions/formActions';
import {submitChangePw}                     from '../actions/authActions';
import {clearMessage}                       from '../actions/messageActions';

const mapStateToProps = state => {
    const {allBlogs, allImages, allVideos}          = state.content;

    return {
        allBlogs,
        allImages,
        allVideos,
        forms       : state.forms,
        lastRoute   : state.route[0],
        message     : state.message,
        user        : state.user
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addLocationToHistory    : pathname => dispatch(addLocationToHistory(pathname)),
        clearMessage            : () => dispatch(clearMessage()),
        handleTextChange        : (e, {id, value} = e.target) => dispatch(handleTextChange(id, value)),
        logout                  : () => dispatch(logout()),
        submitChangePw          : (e) => dispatch(submitChangePw(e))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);