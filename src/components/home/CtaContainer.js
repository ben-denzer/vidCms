import React from 'react';
import {browserHistory} from 'react-router';
import team from '../../img/team.jpg';
import schedule from '../../img/schedule.jpg';
import hp_video_placeholder from '../../img/hp_video_placeholder.png';

const CtaContainer = () => {
    return (
        <div id="cta_container">
            <div className="cta-box">
                <img
                    src={team}
                    alt="Meet the Team"
                    onClick={(() => browserHistory.push('team'))}
                />
                <h5>Meet the Team</h5>
            </div>
            <div className="cta-box">
                <img
                    src={hp_video_placeholder}
                    alt="See our Videos"
                    onClick={() => browserHistory.push('videos')}
                />
                <h5>Watch</h5>
            </div>
            <div className="cta-box">
                <img src={schedule} alt="Schedule an Appointment" />
                <h5>Schedule an Appointment</h5>
            </div>
        </div>
    );
};

export default CtaContainer;