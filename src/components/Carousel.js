import React, { useState, useEffect } from 'react';
import './Carousel.css';
import image1 from '../images/first_images/8.jpg'
import video1 from '../images/first_images/1.mp4'
import image2 from '../images/first_images/9.jpg'
import image3 from '../images/first_images/10.jpg'


const mediaItems = [
  { type: 'image', src: image1 },
  { type: 'video', src: video1 },
  { type: 'image', src: image2 },
  { type: 'image', src: image3 },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % mediaItems.length);
    }, 7000); // Adjust time as needed
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = index => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-media"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {mediaItems.map((item, index) => (
          <div className="carousel-media-wrapper" key={index}>
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={`Slide ${index + 1}`}
                className="carousel-media-item"
              />
            ) : (
              <video
                src={item.src}
                className="carousel-media-item video-item"
                autoPlay={currentIndex === index}
                muted
                controls
              />
            )}
          </div>          
        ))}
      </div>
      <div className="carousel-dots">
        {mediaItems.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentIndex === index ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
