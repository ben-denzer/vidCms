import React            from 'react';
import {connect}        from 'react-redux';
import Carousel         from '../components/home/Carousel';
import CtaContainer     from '../components/home/CtaContainer';
import HomePageText     from '../components/home/HomePageText';
import RecentBlogs      from '../components/home/RecentBlogs';
import RecentVideos     from '../components/home/RecentVideos';
import HomePageMeetUs   from '../components/home/HomePageMeetUs';

const HomePage = (props) => {
    return (
        <div id="home_container">
            <Carousel />
            <HomePageMeetUs />
            <HomePageText />
            <CtaContainer />
            <RecentVideos allVideos={props.allVideos || []} />
            <RecentBlogs allBlogs={props.allBlogs || []} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        allVideos: state.content.allVideos,
        allBlogs: state.content.allBlogs,
    }
};

export default connect(mapStateToProps)(HomePage);