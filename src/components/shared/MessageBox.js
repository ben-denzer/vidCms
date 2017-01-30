import React from 'react';

const styles = {
    showAlert: {
        display: 'block'
    },
    alertHidden: {
        display: 'none'
    }
};

const MessageBox = (props) => {
    const {error, success, info} = props.message || {};
    return (
        <div>
            <div style={error ? styles.showAlert : styles.alertHidden} className="alert alert-danger" role="alert">{error}</div>
            <div style={success ? styles.showAlert : styles.alertHidden} className="alert alert-success" role="alert">{success}</div>
            <div style={info ? styles.showAlert : styles.alertHidden} className="alert alert-info" role="alert">{info}</div>
        </div>
    );
};

export default MessageBox;