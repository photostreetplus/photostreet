import React, {useState}from 'react'
import logo from '../images/logo/Photo_Street_Logo.png'
import clickImg from '../images/logo/click.png'

import './HomeHeader.css'
function HomeHeader() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <>

      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"/>
      <div className='App-header'>
        <div className="company-name"><img type='file' src={logo} alt="Logo" className="company-logo" /></div> 
        <div
          className="dropdown-container"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          <img
              src={clickImg}
              alt="Dropdown Trigger"
              className="dropdown-image"
          />
          
          {showDropdown && (
            <div className="dropdown-menu">
              <div className="dropdown-item">Profile</div>
              <div className="dropdown-item">Settings</div>
              <div className="dropdown-item">Subscriptions</div>
              <div className="dropdown-item">Logout</div>
            </div>
          )}
        </div>
        </div>
    </>
  )
}

export default HomeHeader
