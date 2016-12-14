import React from 'react';
import woman1 from '../img/woman1.jpg';
import woman2 from '../img/woman2.jpg';

const AboutPage = () => {
    return (
        <div id="about_page">
            <h1>Our Staff</h1>
            <div className="about-section">
                <div className="about-section-top"><h2>Phoenix</h2></div>
                <div className="about-section-bottom about-img-left">
                    <div className="about-img-container">
                        <img src={woman1} alt="" />
                    </div>
                    <div className="about-text-section">
                        <p className="quote">"We've seen amazing results already. Energy Healing is worth much more than I paid. Thank You!" - Kia.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
            <div className="about-section">
                <div className="about-section-top"><h2>Brooke</h2></div>
                <div className="about-section-bottom about-img-right">
                    <div className="about-img-container">
                        <img src={woman2} alt="" />
                    </div>
                    <div className="about-text-section">
                        <p className="quote">"You won't regret it. This is simply unbelievable!" - Dacey N.</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;