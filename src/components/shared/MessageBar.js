import React from 'react';

const styles = {
    showAlert: {
        display: 'block',
        width: '90%',
        textAlign: 'center',
        position: 'absolute',
        top: 15,
        left: '5%'
    },
    alertHidden: {
        display: 'none'
    }
};

const MessageBox = (props) => {
    const {error, success, info} = props.message || {};

    if (error || success || info) setTimeout(props.clearMessage, 5000);

    return (
        <div>
            <div style={error ? styles.showAlert : styles.alertHidden} className="alert alert-danger" role="alert">{error}</div>
            <div style={success ? styles.showAlert : styles.alertHidden} className="alert alert-success" role="alert">{success}</div>
            <div style={info ? styles.showAlert : styles.alertHidden} className="alert alert-info" role="alert">{info}</div>
        </div>
    );
};

export default MessageBox;