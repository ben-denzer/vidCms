import React from 'react';
import team1 from '../../img/team1.jpg';
import {browserHistory} from 'react-router';

const HomePageMeetUs = () => {
    return (
        <div id="homepage_meet_us_container">
            <div id="meet_us_top">
                <h2>Our Staff</h2>
            </div>
            <div id="meet_us_bottom">
                <img src={team1} alt="Our Staff" />
                <div id="meet_us_text_container">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button onClick={() => browserHistory.push('/about')}>Read More</button>
                </div>
            </div>
        </div>
    );
};

export default HomePageMeetUs;