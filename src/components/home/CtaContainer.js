import React from 'react';
import {browserHistory} from 'react-router';
import team from '../../img/team.jpg';
import schedule from '../../img/schedule.jpg';
import hp_video_placeholder from '../../img/hp_video_placeholder.png';

const CtaContainer = () => {
    return (
        <div id="cta_container">
            <div className="cta-box">
                <h2>Schedule an Appointment</h2>
                <img
                    src={schedule}
                    alt="Schedule an Appointment"
                    onClick={() => browserHistory.push('/contact')}
                />
            </div>
            <div className="cta-box">
                <h2>All Videos</h2>
                <img
                    src={hp_video_placeholder}
                    alt="See our Videos"
                    onClick={() => browserHistory.push('/videos')}
                />
            </div>
            <div className="cta-box">
                <h2>Meet the Team</h2>
                <img
                    src={team}
                    alt="Meet the Team"
                    onClick={(() => browserHistory.push('/team'))}
                />
            </div>
        </div>
    );
};

export default CtaContainer;