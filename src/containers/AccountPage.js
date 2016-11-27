import React from 'react';
import {connect} from 'react-redux';

class AccountPage extends React.Component {
    render() {
        const {name, premium} = this.props.user;
        return (
            <div id="account_page">
                <h1>My Account</h1>
                <div id="account_username">Name: {name}</div>
                <div id="account_premium">Premium Member? {premium ? "Yes" : "No"}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountPage);