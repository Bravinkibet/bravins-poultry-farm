// src/components/Logout.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logout.css';

function Logout({ onLogout }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    // Add logout logic (clearing tokens, etc.) here if needed
    onLogout(); // Call the logout function passed as a prop
    setShowModal(false);
  };

  return (
    <>
      <Link to="#" onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i>
      </Link>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h1>Are you sure you want to logout?</h1>
            <button onClick={handleLogout} className="logout-btn">
              Yes
            </button>
            <button onClick={handleModalClose} className="cancel-btn">No</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Logout;
