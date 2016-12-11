import React            from 'react';
import {connect}        from 'react-redux';
import Carousel         from '../components/home/Carousel';
import CtaContainer     from '../components/home/CtaContainer';
import HomePageText     from '../components/home/HomePageText';
import RecentVideos     from '../components/home/RecentVideos';

const HomePage = (props) => {
    return (
        <div id="home_container">
            <Carousel />
            <HomePageText />
            <CtaContainer />
            <RecentVideos allVideos={props.allVideos || []} />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        allVideos: state.content.allVideos
    }
};

export default connect(mapStateToProps)(HomePage);