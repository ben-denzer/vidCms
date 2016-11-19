import React from 'react';
//import {browserHistory} from 'react-router';

const AdminPage = (props) => {
    return (
        <div>
            {props.html || "no html"}
            {props.children}
        </div>
    );
};

export default AdminPage;