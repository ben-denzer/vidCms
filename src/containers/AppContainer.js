import { connect }    from 'react-redux';
import { logout }     from '../actions/authActions';
import App          from '../components/App';

const mapStateToProps = state => {
    const {allBlogs, allImages, allVideos} = state.content;
    return {
        name: 'ben',
        allBlogs,
        allImages,
        allVideos,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        logout: dispatch( logout() )
    }
};

export default connect( mapStateToProps, mapDispatchToProps )( App );