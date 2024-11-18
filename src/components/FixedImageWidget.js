import React from 'react';
import './FixedImageWidget.css'; // Assuming you will write styles here
import logo from '../images/logo/Photo_Street_Logo.png'

const FixedImageWidget = () => {
  return (
    <div className="fixed-image-widget">
      <img src={logo} alt="Widget" />
    </div>
  );
};

export default FixedImageWidget;
