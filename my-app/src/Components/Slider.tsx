import React, { useState } from 'react';
import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.png';
import back from '../Images/back.png';
import forward from '../Images/forward.png'; 
import HeroSection from './HeroSection';
import HeroSection2 from './HeroSection2';
import HeroSection3 from './HeroSection3';


// Array images with objects.  
const images = [image1, image2, image3];

// Array herosectios with objects.
const heroSections = [<HeroSection />, <HeroSection2 />, <HeroSection3 />];

const Slider: React.FC = () => {

  // Initialize state to keep track of the current slide index
  const [currentIndex, setCurrentIndex] = useState(0);


  // Function to go to the previous slide
  // If the current slide is the first one, wrap around to the last slide
  // Otherwise, decrease the current slide index by 1

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  // Function to go to the next slide
  // If the current slide is the last one, wrap around to the first slide
  // Otherwise, increase the current slide index by 1

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="slider">
      <img className="image-slider" src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      <div className="buttons">
        <div className="button" onClick={goToPreviousSlide}>
          <img className="back" src={back} alt="Back" />
        </div>
        <div className="button" onClick={goToNextSlide}>
          <img className="forward" src={forward} alt="Forward" />
        </div>
      </div>
      <div className="hero-section">
        {heroSections[currentIndex]}
      </div>
    </div>
  );
};

export default Slider;
