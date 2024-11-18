import React, { useState, useRef, useEffect } from 'react';
import clickImg from '../images/logo/click.png'

function HelpWidget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('Select service');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [budget, setBudget] = useState('');
  const [freeText, setFreeText] = useState('');

  // Ref for the widget container to detect click outside
  const widgetRef = useRef(null);
  const iconRef = useRef(null);

  const toggleWidget = () => {
    setIsWidgetOpen(prev => !prev);
  };

  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
  const handleFreeTextChange = (e) => setFreeText(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleZipCodeChange = (e) => setZipCode(e.target.value);
  const handleBudgetChange = (e) => setBudget(e.target.value);
  const handleServiceChange = (e) => setService(e.target.value);
  const handleCountryCodeChange = (e) => setCountryCode(e.target.value);

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
            height: '7%',
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
          <h3>Get Quote Quickly</h3>
          <form>
            {/* Name Field */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name"></label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Your good name please"
                style={{ width: '100%', padding: '8px', marginTop: '5px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
                
              />
            </div>

            {/* Country Code and Phone Number */}
            <div style={{ marginBottom: '10px', display: 'flex' }}>
              <select
                value={countryCode}
                onChange={handleCountryCodeChange}
                style={{ width: '40%', padding: '8px', marginRight: '5px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
              >
                <option value="+1">+1 (USA)</option>
                <option value="+91">+91 (India)</option>
                {/* Add other country codes as needed */}
              </select>
              <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="May I have your Number"
                style={{ width: '50%', padding: '8px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
              />
            </div>

            {/* Free Text */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="freeText"></label>
              <textarea
                id="freeText"
                value={freeText}
                onChange={handleFreeTextChange}
                placeholder="Tell us more about you wonderful event"
                style={{
                  width: '100%',
                  padding: '8px',
                  marginTop: '5px',
                  height: '40px',
                  resize: 'none', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none',
                }}
              />
            </div>

            {/* Service Dropdown */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="service"></label>
              <select
                id="service"
                value={service}
                onChange={handleServiceChange}
                style={{ width: '100%', padding: '8px', marginTop: '5px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
              >
                <option value="Select service">Select service</option>
                <option value="Wedding">Wedding</option>
                <option value="Prewedding">Prewedding</option>
              </select>
            </div>

            {/* City and Zip Code */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="city"></label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleCityChange}
                placeholder="Enter your City"
                style={{ width: '100%', padding: '8px', marginTop: '5px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="zip"></label>
              <input
                type="text"
                id="zip"
                value={zipCode}
                onChange={handleZipCodeChange}
                placeholder="Enter zip code"
                style={{ width: '100%', padding: '8px', marginTop: '5px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
              />
            </div>

            {/* Budget */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="budget"></label>
              <div style={{ display: 'flex' }}>
                <span style={{ padding: '8px', backgroundColor: '#f4f4f4', borderRight: '1px solid #ddd', height: '34px', display: 'flex', alignItems: 'center' }}>$</span>
                <input
                  type="number"
                  id="budget"
                  value={budget}
                  onChange={handleBudgetChange}
                  placeholder="Approximate Budget"
                  style={{ width: 'calc(100% - 30px)', padding: '8px', marginLeft: '5px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
                />
              </div>
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
