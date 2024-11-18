import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // You need to install react-icons if not already

const WhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/8488639929', '_blank');
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        cursor: 'pointer',
        zIndex: 1000, // Ensures it stays above other elements
      }}
    >
      <FaWhatsapp size={40} color="green" />
    </div>
  );
};

export default WhatsAppIcon;
