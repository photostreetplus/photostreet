import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';  // You need to install axios

function HelpWidget3() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('Select service');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [budget, setBudget] = useState('');
  const [freeText, setFreeText] = useState('');

  const widgetRef = useRef(null);
  const iconRef = useRef(null);

  const toggleWidget = () => {
    setIsWidgetOpen(prev => !prev);
  };

  // Form field handlers
  const handleNameChange = (e) => setName(e.target.value);
  const handlePhoneChange = (e) => setPhoneNumber(e.target.value);
  const handleFreeTextChange = (e) => setFreeText(e.target.value);
  const handleCityChange = (e) => setCity(e.target.value);
  const handleZipCodeChange = (e) => setZipCode(e.target.value);
  const handleBudgetChange = (e) => setBudget(e.target.value);
  const handleServiceChange = (e) => setService(e.target.value);
  const handleCountryCodeChange = (e) => setCountryCode(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to send
    const formData = {
      name,
      countryCode,
      phoneNumber,
      service,
      city,
      zipCode,
      budget,
      freeText,
    };

    try {
      // Send data to the backend to process email and SMS
      await axios.post('http://localhost:5000/send-details', formData);
      alert('Details sent successfully!');
    } catch (error) {
      console.error('Error sending details:', error);
      alert('There was an error sending the details.');
    }
  };

  // Detect click outside to close widget
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
    <div>
      <div
        onClick={toggleWidget}
        ref={iconRef}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '15px',
          borderRadius: '50%',
          cursor: 'pointer',
          fontSize: '24px',
        }}
      >
        ?
      </div>

      {isWidgetOpen && (
        <div
          ref={widgetRef}
          style={{
            position: 'fixed',
            bottom: '70px',
            right: '20px',
            backgroundColor: 'white',
            padding: '20px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            width: '250px',
            zIndex: 1000,
            borderRadius: '5px',
          }}
        >
          <h3>Get Help</h3>
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                placeholder="Enter your name"
                style={{ width: '100%', padding: '8px', borderBottom: '2px solid #4CAF50' }}
              />
            </div>

            {/* Country Code and Phone Number */}
            <div style={{ marginBottom: '10px', display: 'flex' }}>
              <select
                value={countryCode}
                onChange={handleCountryCodeChange}
                style={{ width: '50%', padding: '8px', borderBottom: '2px solid #4CAF50' }}
              >
                <option value="">Country Code</option>
                <option value="+1">+1 (USA)</option>
                <option value="+44">+44 (UK)</option>
                <option value="+91">+91 (India)</option>
              </select>
              <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="Phone number"
                style={{ width: '50%', padding: '8px', borderBottom: '2px solid #4CAF50' }}
              />
            </div>

            {/* Free Text */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="freeText">Message</label>
              <textarea
                id="freeText"
                value={freeText}
                onChange={handleFreeTextChange}
                placeholder="Enter any additional information"
                style={{ width: '100%', padding: '8px', height: '80px', borderBottom: '2px solid #4CAF50' }}
              />
            </div>

            {/* Service Dropdown */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="service">Select Service</label>
              <select
                id="service"
                value={service}
                onChange={handleServiceChange}
                style={{ width: '100%', padding: '8px', borderBottom: '2px solid #4CAF50' }}
              >
                <option value="Select service">Select service</option>
                <option value="Wedding">Wedding</option>
                <option value="Prewedding">Prewedding</option>
              </select>
            </div>

            {/* City and Zip Code */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="city">Enter your City</label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleCityChange}
                placeholder="Enter city"
                style={{ width: '100%', padding: '8px', borderBottom: '2px solid #4CAF50' }}
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="zip">Zip Code</label>
              <input
                type="text"
                id="zip"
                value={zipCode}
                onChange={handleZipCodeChange}
                placeholder="Enter zip code"
                style={{ width: '100%', padding: '8px', borderBottom: '2px solid #4CAF50' }}
              />
            </div>

            {/* Budget */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="budget">Approximate Budget</label>
              <input
                type="number"
                id="budget"
                value={budget}
                onChange={handleBudgetChange}
                placeholder="Enter budget"
                style={{ width: '100%', padding: '8px', borderBottom: '2px solid #4CAF50' }}
              />
            </div>

            <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white' }}>
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default HelpWidget3;
