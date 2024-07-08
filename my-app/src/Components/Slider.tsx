import React, { useState } from 'react';
import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.png';
import back from '../Images/back.png';
import forward from '../Images/forward.png'; 
import HeroSection from './HeroSection';

const images = [image1, image2, image3];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
        <img className="image-slider" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <span className="buttons">
          <div className="button" onClick={goToPreviousSlide}>
            <img className="back" src={back} alt="Back" />
          </div>
          <div className="button" onClick={goToNextSlide}>
            <img className="forward" src={forward} alt="Forward" />
          </div>
        </span>
        <HeroSection />
    </div>
  );
};

export default Slider;
