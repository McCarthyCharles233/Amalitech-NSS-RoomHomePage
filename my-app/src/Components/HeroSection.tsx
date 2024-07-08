import React from "react";
import goto from '../Images/goto.png';

const HeroSection: React.FC = () => {
    return(
        <div className="hero">
            <p className="heading">Discover innovative ways to decorate</p>
            <p className="info">We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in 
                your own style with our collection and make your property a reflection of you and what you 
                love.
            </p>
            <div className="link">
                <span>Shop now</span>
                <img src={goto} alt="link image" />
            </div>
        </div>
    );
}

export default HeroSection;