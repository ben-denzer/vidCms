import React from 'react';
import {browserHistory} from 'react-router';

const HomePage = (props) => {
    return (
        <div id="home_container">
            <h1>Las Vegas Energy Healing</h1>
            <h2>GET STARTED FOR FREE</h2>
            <button
                className="home-button"
                id="video_button"
                onClick={() => browserHistory.push('videos')}
            >
                Go To Videos
            </button>
        </div>
    )
};

export default HomePage;