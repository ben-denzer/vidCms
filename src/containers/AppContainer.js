import {connect}    from 'react-redux';
import {logout}     from '../actions/authActions';
import App          from '../components/App';

const mapStateToProps = (state) => {
    return {
        name: null
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);