import React, { useState } from 'react';
import image1 from '../Images/image1.png';
import image2 from '../Images/image2.png';
import image3 from '../Images/image3.png';
import SliderButton from './SliderButton';
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
      <div className="image-slider">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      <SliderButton direction="prev" onClick={goToPreviousSlide} />
      <SliderButton direction="next" onClick={goToNextSlide} />
      <HeroSection />
    </div>
  );
};

export default Slider;
