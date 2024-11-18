import React, { useState, useEffect } from 'react';
import './Carousel.css';


const mediaItems = [
  { type: 'image', src: 'https://drive.google.com/thumbnail?id=16cV1yWrW_RskEPrhDoqFa1ZKuyuoeqbs&sz=w1000' },
  // { type: 'video', src: 'https://drive.google.com/file/d/1j40yjM5cfxk4Md455uXl0e878-PRiFNO/preview' },
  { type: 'image', src: 'https://drive.google.com/thumbnail?id=10IFPTQgv8C7oK5AKePFdePgyFiPD2Dst&sz=w1000' },
  { type: 'image', src: 'https://drive.google.com/thumbnail?id=1ahDn6kaUfTEEiqI1qpcPfjA6NmDbEbLS&sz=w1000' },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);


  // Automatically change slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % mediaItems.length);
    }, 300000); // Adjust time as needed
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
              // <video
              //   src={item.src}
              //   className="carousel-media-item video-item"
              //   autoPlay={currentIndex === index}
              //   muted
              //   controls
              // />
              <iframe
                src={item.src}
                className="carousel-media-item video-item"
                allow="autoplay"
                allowFullScreen
                title="Google Drive Video"
                muted
              ></iframe>
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
