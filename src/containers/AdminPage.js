import React from 'react';
//import {browserHistory} from 'react-router';

const AdminPage = (props) => {
    return (
        <div id="admin_page">
            {props.children}
        </div>
    );
};

export default AdminPage;