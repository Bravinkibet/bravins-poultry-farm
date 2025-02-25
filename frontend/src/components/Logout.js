import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Logout.css';

function Logout({ onLogout }) {
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleLogout = () => {
    onLogout(); // Calls the logout function passed from Navbar
    setShowModal(false);
  };

  return (
    <>
      <Link to="#" className="logout-icon" onClick={() => setShowModal(true)}>
        <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
      </Link>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h1>Are you sure you want to logout?</h1>
            <div className="modal-buttons">
              <button onClick={handleLogout} className="logout-btn">
                Yes
              </button>
              <button onClick={handleModalClose} className="cancel-btn">
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Logout;
