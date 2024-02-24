
import React from 'react';
import './HeroImage.css'; // Link to the CSS file for styling

const HeroImage = ({ title, subtitle, backgroundImage }) => {
    return (
        <div className="hero-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-text">
                <h1>{title}</h1>
                <p>{subtitle}</p>
            </div>
        </div>
    );
}

export default HeroImage;
