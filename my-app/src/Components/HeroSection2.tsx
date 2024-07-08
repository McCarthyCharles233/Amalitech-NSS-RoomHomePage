import React from "react";
import goto from '../Images/goto.png';

const HeroSection2: React.FC = () => {
    return(
        <div className="hero">
            <p className="heading">We are available all across the globe</p>
            <p className="info">With stores all over the world, it's easy 
                for you to find furniture for your home or place of business. 
                Locally, we're in most major cities throughout the country. 
                Find the branch nearest you using our store locator. Any questions? 
                Don't hesitate to contact us today.
            </p>
            <div className="link">
                <span>Shop now</span>
                <img src={goto} alt="link image" />
            </div>
        </div>
    );
}

export default HeroSection2;