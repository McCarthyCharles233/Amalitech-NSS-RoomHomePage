import React from "react";
import goto from '../Images/goto.png';

const HeroSection3: React.FC = () => {
    return(
        <div className="hero">
            <p className="heading">Manufactured with the best materials</p>
            <p className="info">Our modern furniture store provide a high level of quality. 
                Our company has invested in advanced technology to ensure that every product 
                is made as perfect and as consistent as possible. With three decades of experience 
                in this industry, we understand what customers want for their home and office.
            </p>
            <div className="link">
                <span>Shop now</span>
                <img src={goto} alt="link image" />
            </div>
        </div>
    );
}

export default HeroSection3;