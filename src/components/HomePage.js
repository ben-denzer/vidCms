import React from 'react';
import {browserHistory} from 'react-router';
import slide1 from '../img/slide1.jpg';
import slide2 from '../img/slide2.jpg';
import slide3 from '../img/slide3.jpg';
import slide4 from '../img/slide4.jpg';
import team from '../img/team.jpg';
import schedule from '../img/schedule.jpg';
import hp_video_placeholder from '../img/hp_video_placeholder.png';

const HomePage = (props) => {
    return (
        <div id="home_container">
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src={slide2} role="presentation" />
                        <div className="caption left-align">
                            <h3>e&middot;qua&middot;nim&middot;i&middot;ty</h3>
                            <h5 className="light grey-text text-lighten-3">mental calmness, composure, and evenness of temper, especially in a difficult situation.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={slide3} role="presentation" />
                        <div className="caption right-align">
                            <h3>e&middot;qua&middot;nim&middot;i&middot;ty</h3>
                            <h5 className="light grey-text text-lighten-3">mental calmness, composure, and evenness of temper, especially in a difficult situation.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={slide1} role="presentation" />
                    </li>
                    <li>
                        <img src={slide4} role="presentation" />
                    </li>
                </ul>
            </div>
            <div id="cta_container">
                <div className="cta-box">
                    <img src={team} alt="Meet the Team" />
                    <h5>Meet the Team</h5>
                </div>
                <div className="cta-box">
                    <img src={hp_video_placeholder} alt="Meet the Team" />
                    <h5>Watch</h5>
                </div>
                <div className="cta-box">
                    <img src={schedule} alt="Meet the Team" />
                    <h5>Schedule an Appointment</h5>
                </div>
            </div>
        </div>
    )
};

export default HomePage;