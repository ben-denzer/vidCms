import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';
import {clearMessage} from '../actions/messageActions';
import Header from '../components/Header';

const App = (props) => {
    const {error, success, info} = props.message;
    if (error || success || info) setTimeout(_ => props.clearMessage, 6000);
    return (
        <div id="mainContainer" className="App">
            <Header name={props.user.name} logout={props.logout} />
            <div className="messageBox" id="errorBox">{error}</div>
            <div className="messageBox" id="successBox">{success}</div>
            <div className="messageBox" id="infoBox">{info}</div>
            {props.children}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        message: state.message
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
        clearMessage: () => dispatch(clearMessage())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);