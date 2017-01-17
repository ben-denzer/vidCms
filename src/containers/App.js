import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../actions/authActions';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MessageBox from '../components/share/MessageBox';

const App = (props) => {
    return (
        <div id="mainContainer" className="App">
            <Header name={props.user.name} logout={props.logout} />
            <MessageBox message={props.message} />
            {props.children}
            <Footer />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        message: state.message,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);