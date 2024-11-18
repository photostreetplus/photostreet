import React, { useState, useRef, useEffect } from 'react';
import clickImg from '../images/logo/click.png'
import SuccessModal from './SuccessModal';
import axios from 'axios';
import emailjs from '@emailjs/browser';

function HelpWidget() {
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [name, setName] = useState('');
  const [countryCode, setCountryCode] = useState('+1');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [service, setService] = useState('Select service');
  const [city, setCity] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [budget, setBudget] = useState('');
  const [freeText, setFreeText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return; // Prevent form submission if email is invalid
    }else setEmailError('');

    const phonePattern = /^[0-9]{10}$/; // Adjust the pattern for your phone number format
    if (!phonePattern.test(phoneNumber)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      return; // Prevent form submission if phone number is invalid
    }else setPhoneError('');

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
    console.log(formData)

    const serviceId = 'service_rpeum25';
    const templateId = 'template_n24rv5b';
    const publicKey = 'PL7396IIyWhvKlizQ';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        m_name: name,
        m_email: email,
        m_phone: countryCode +' '+ phoneNumber,
        m_service: service,
        m_city: city,
        m_zip: zipCode,
        m_freetext: freeText,
        m_budget: budget
      }
    };
    const template_params = {
      m_name: name,
      m_email: email,
      m_phone: countryCode +' '+ phoneNumber,
      m_service: service,
      m_city: city,
      m_zip: zipCode,
      m_freetext: freeText,
      m_budget: budget
    };

    // Send the email using EmailJS
    emailjs.send(serviceId, templateId, template_params, publicKey)
    .then((response) => {
      console.log('Email sent successfully!', response);
    })
    .catch((error) => {
      console.error('Error sending email:', error);
    });

    try {
      // Send data to the backend to process email and SMS
      //await axios.post('http://localhost:5000/send-details', formData);
      console.log(data)
      //const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      //console.log(res.data);
      setIsModalVisible(true);
      //setIsWidgetOpen(false);
      setName('');
      setCountryCode('');
      setPhoneNumber('');
      setService('Select service');
      setCity('');
      setZipCode('');
      setBudget('');
      setFreeText('');
      setEmail('');
      setEmailError('');
      setPhoneError('');
    } catch (error) {
      console.error('Error sending details:', error);
      alert('There was an error sending the details.');
    }
  };

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
          <form onSubmit={handleSubmit}>
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
                required
              />
            </div>

            {/* Email Field */}
            <div style={{ marginBottom: '10px' }}>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email as well"
                style={{ width: '100%', padding: '8px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none',  }}
                required
              />
              {emailError && <span style={{ color: 'red', fontSize: '12px' }}>{emailError}</span>}
            </div>

            {/* Country Code and Phone Number */}
            <div style={{ marginBottom: '10px', display: 'flex' }}>
              <select
                value={countryCode}
                onChange={handleCountryCodeChange}
                style={{ width: '40%', padding: '8px', marginRight: '5px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
                required
              >                
                <option value="+1" selected="selected" >+1 (USA)</option>
                <option value="+91">+91 (India)</option>
                {/* Add other country codes as needed */}
              </select>
              <input
                type="text"
                id="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Phone number"
                style={{ width: '50%', padding: '8px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
                required
              />
            </div>
            {phoneError && <span style={{ color: 'red', fontSize: '12px' }}>{phoneError}</span>}

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
                required
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
                required
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
                required
              />
            </div>

            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="zip"></label>
              <input
                type="number"
                id="zip"
                value={zipCode}
                onChange={handleZipCodeChange}
                placeholder="Enter zip code"
                style={{ width: '100%', padding: '8px', marginTop: '5px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
                required
              />
            </div>

            {/* Budget */}
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="budget"></label>
              <div style={{ display: 'flex' }}>
                <span style={{ padding: '8px', backgroundColor: '#f4f4f4', borderRight: '1px solid #ddd', height: '15px', display: 'flex', alignItems: 'center' }}>$</span>
                <input
                  type="number"
                  id="budget"
                  value={budget}
                  onChange={handleBudgetChange}
                  placeholder="Approximate Budget"
                  style={{ width: 'calc(100% - 30px)', padding: '8px', marginLeft: '5px', border: 'none',borderBottom: '2px solid #4CAF50',  outline: 'none', }}
                  required
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
          <SuccessModal isVisible={isModalVisible} onClose={() => {setIsModalVisible(false); setIsWidgetOpen(false);}} />
        </div>
      )}
    </>
  );
}

export default HelpWidget;
