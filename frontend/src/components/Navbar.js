// src/components/Navbar.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import "../styles/Navbar.css";

const Navbar = () => {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("user_token");

  const toggleMobileMenu = () => {
    setMobileMenuActive((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <div className="brand-name">
        <Link to="/">ELDO-POULTRY</Link>
      </div>
      {/* Desktop Navigation */}
      <div className="nav-items desktop-only">
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/order">Place Order</Link>
          </li>
          {isLoggedIn ? (
            <li>
              <Logout onLogout={handleLogout} />
            </li>
          ) : (
            <li>
              <Link to="/login">Login/SignUp</Link>
            </li>
          )}
        </ul>
      </div>
      {/* Hamburger icon for Mobile */}
      <div className="menu-toggle mobile-only" onClick={toggleMobileMenu}>
        <span>&#9776;</span>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuActive && (
        <div className="mobile-menu">
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/order" onClick={toggleMobileMenu}>
                Place Order
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Logout
                  onLogout={() => {
                    toggleMobileMenu();
                    handleLogout();
                  }}
                />
              </li>
            ) : (
              <li>
                <Link to="/login" onClick={toggleMobileMenu}>
                  Login/SignUp
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
