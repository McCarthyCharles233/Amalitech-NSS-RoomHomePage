import React from "react";
import image4 from "../Images/image4.png";
import image5 from "../Images/image5.png";

const About: React.FC = () => {
    return(
        <div className="about">
            <span>
                <img src={image4} alt="image 4" />
            </span>
            <span className="about-paragraph">
                <p className="about-heading">about our funiture</p>
                <p className="about-info">Our multifunctional collection blends design and function to suit your individual taste.
                    Make each room unique, or pick a cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                    or anything in between. Product specialists are available to help you create your dream 
                    space. 
                </p>
            </span>
            <span>
                <img src={image5} alt="image 5" />
            </span>
        </div>
    );
};

export default About;