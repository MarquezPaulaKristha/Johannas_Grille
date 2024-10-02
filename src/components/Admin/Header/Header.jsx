
import React, { useState, useEffect } from 'react';
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import './Header.css'; // Import the CSS

function Header({ text }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  // Toggles the dropdown menu
  const toggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  // Handle clicks outside of the dropdown to close it
  const handleClickOutside = (event) => {
    if (!event.target.closest('.dropdown') && isDropdownOpen) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Handle logout by clearing the session storage
  const handleLogout = () => {
    sessionStorage.clear(); // Clear session storage on logout
    navigate('/admin/login'); // Redirect to login page
  };

  useEffect(() => {
    const username = sessionStorage.getItem('username');
    const usertype = sessionStorage.getItem('usertype');

    // If no user is logged in, redirect to login page
    if (!username || !usertype) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <header className="profile-header">
      <h1>{text}</h1>
      <div className="profile-container">
        <div className="profile-info">
          <div className="name">
            {`${sessionStorage.getItem('firstname') || 'Admin'} ${sessionStorage.getItem('lastname') || ''}`}
          </div>
          <div className="role">{sessionStorage.getItem('usertype') || 'Administrator'}</div>
        </div>
        <div className="dropdown">
          <i className="profile-image" onClick={toggleDropdown} aria-expanded={isDropdownOpen}>
            <CgProfile size={40} />
          </i>
          {isDropdownOpen && (
            <div className="dropdown-content">
              <ul>
                <li>Account Settings</li>
                <li className="logout" onClick={handleLogout}>Logout</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;