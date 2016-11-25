import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';
import Header from '../components/Header';

const App = (props) => {
    console.log(props.user);
    return (
        <div id="mainContainer" className="App">
            <Header name={props.user.name} logout={props.logout} />
            {props.children}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);