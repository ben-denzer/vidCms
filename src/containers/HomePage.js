import React from 'react';
import { connect } from 'react-redux';

const HomePage = (props) => {
    return (
        <div>
            {props.user || 'no user'}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user.name
    };
};

export default connect(mapStateToProps, null)(HomePage);
