import React        from 'react';
import { Link }     from 'react-router';
import { Navbar }   from 'react-bootstrap';

const MyNav = ( props ) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <Link to='/'>NodeReact</Link>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <ul className="nav navbar-nav navbar-right">
                    <li role="presentation"><Link to='/'>Home</Link></li>
                    <li role="presentation"><Link to='/about'>About</Link></li>
                    <li role="presentation"><Link to='/videos'>Videos</Link></li>
                    <li role="presentation"><Link to='/blog'>Blog</Link></li>
                    <li role="presentation"><Link to='/contact'>Contact</Link></li>
                    { props.name && <li role="presentation"><Link to='/account'>My Account</Link></li> }
                    {
                        props.name ?
                            <li role="presentation"><a onClick={() => props.logout()}>Log Out</a></li> :
                            <li role="presentation"><Link to='/auth/login'>Log In</Link></li>
                    }
                </ul>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MyNav;