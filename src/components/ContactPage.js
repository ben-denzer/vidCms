import React from 'react';
import room from '../img/room.jpg';
import {googleMapsKey} from '../.keys';

const styles = {
    noBorder: {
        border: 0
    }
};

const ContactPage = () => {
    return (
        <div id="contact_page">
            <h1>Contact Us</h1>
            <div className="contact-section">
                <div className="contact-section-top"><h2>Schedule An Appointment</h2></div>
                <div className="contact-section-bottom contact-img-left">
                    <div className="contact-img-container">
                        <img src={room} alt="" />
                    </div>
                    <div className="contact-text-section">
                        <p className="quote">"We've seen amazing results already. Energy Healing is worth much more than I paid. Thank You!" - Kia.</p>
                        <p id="business_name">Equinimity</p>
                        <a id="phone" href="tel:702-555-5555">702-555-5555</a>
                        <iframe width="600" height="450" frameBorder="0" style={styles.noBorder} src={`https://www.google.com/maps/embed/v1/place?q=ikea%20las%20vegas&key=${googleMapsKey}`} allowFullScreen></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;