import React, { useState, useRef, useEffect } from 'react';
import clickImg from '../images/logo/click.png'

function HelpWidget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  
  // Ref for the widget container to detect click outside
  const widgetRef = useRef(null);
  const iconRef = useRef(null);

  const toggleWidget = () => {
    setIsWidgetOpen(prev => !prev);
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);

  // Detect click outside the widget or icon
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target) && !iconRef.current.contains(event.target)) {
        setIsWidgetOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Get Help Icon */}
       <img type='file' src={clickImg} alt="Logo" 
        onClick={toggleWidget}
        ref={iconRef}
        style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '15px',
            display: 'block',
            cursor: 'pointer',
            height: '8%',
        }}
      />

      {/* Help Widget */}
      {isWidgetOpen && (
        <div
          ref={widgetRef}
          style={{
            position: 'fixed',
            bottom: '70px', // Just above the help icon
            right: '20px',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            width: '250px',
            zIndex: 1000,
            borderRadius: '5px',
          }}
        >
          <h3>Get Quotation</h3>
          <form>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Your good name"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="phone"></label>
              <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="May I have your Number"
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <button
              type="submit"
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              Get Call back
            </button>
          </form>
        </div>
      )}
    </>
  );
}

export default HelpWidget;
