import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';
import Header from './Header';

const App = (props) => {
    return (
        <div id="mainContainer" className="App">
            <Header name={props.name} logout={props.logout} />
            {props.children}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        name: state.user.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);