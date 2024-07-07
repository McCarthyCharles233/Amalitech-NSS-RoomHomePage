import React from "react";
import image1 from '../Images/image1.png';



const Slider: React.FC = () => {
    return(
        <div className="image-slider">
            <img src={image1} alt="Slide 1" />
        </div>
    );
}

export default Slider;