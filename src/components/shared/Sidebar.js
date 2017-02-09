import React            from 'react';
import styled           from 'styled-components';
import {Link}           from 'react-router-dom';
import profile          from '../../img/profile.jpg';
import {SectionHeader}  from '../../styles/share';

const Sidebar = (props) => {
    return (
        <SidebarContainer>
            <SidebarAd />
            <SidebarContent>
                <SectionHeader>About The Author</SectionHeader>
                <SidebarImg src={profile} alt="Ben Denzer" />
                <p>My name is Ben Denzer and I'm a JavaScript developer in the Las Vegas area. <Link to='/about'>more</Link></p>
            </SidebarContent>
        </SidebarContainer>
    );
};

const SidebarAd = styled.div`
    height: 300px;
    width: 100%;
    background-color: #222;
    margin: 15px 0;
`;

const SidebarContainer = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
`;

const SidebarContent = styled.div`
    background-color: #999;
    border: 2px solid #222;
    padding: 0 10px;
`;

const SidebarImg = styled.img`
    width: 100%;
    height: auto;
`;

export default Sidebar;