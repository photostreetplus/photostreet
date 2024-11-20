import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

// Define all images as a constant array
const images = [
  'https://drive.google.com/thumbnail?id=16cV1yWrW_RskEPrhDoqFa1ZKuyuoeqbs&sz=w1000',
  'https://drive.google.com/thumbnail?id=10IFPTQgv8C7oK5AKePFdePgyFiPD2Dst&sz=w1000',
  'https://drive.google.com/thumbnail?id=1ahDn6kaUfTEEiqI1qpcPfjA6NmDbEbLS&sz=w1000'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 10 seconds

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, []);

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? images.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="slider-image"
        />
      </div>
      <button className="left-arrow" onClick={goToPrevious}>
        &#8249;
      </button>
      <button className="right-arrow" onClick={goToNext}>
        &#8250;
      </button>
    </div>
  );
};

export default ImageSlider;
