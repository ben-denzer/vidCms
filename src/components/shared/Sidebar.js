import React                        from 'react';
import styled                       from 'styled-components';
import {Link}                       from 'react-router-dom';
import profile                      from '../../img/profile.jpg';
import {SectionHeader}              from '../../styles/share';
import {mediaUrl, defaultImage}     from '../../.keys';

const Sidebar = (props) => {
    return (
        <SidebarContainer>
            {!props.noImage && (
                <BlogImg src={props.img ? `${mediaUrl}${props.img}` : defaultImage} alt={props.alt} />
            )}
            {!props.noAd && <SidebarAd />}

            <SidebarContent>
                <SectionHeader>About The Author</SectionHeader>
                <ProfileImg src={profile} alt="Ben Denzer" />
                <p>My name is Ben Denzer and I'm a JavaScript developer in the Las Vegas area. <Link to='/about'>more</Link></p>
            </SidebarContent>
        </SidebarContainer>
    );
};

const BlogImg = styled.img`
    width: 100%;
    height: auto;
`;

const SidebarAd = styled.div`
    height: 300px;
    width: 100%;
    background-color: #222;
    margin: 15px 0 0;
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
    margin-top: 15px;
`;

const ProfileImg = styled.img`
    width: 100%;
    height: auto;
`;

export default Sidebar;
