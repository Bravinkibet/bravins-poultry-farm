// src/components/Navbar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout";
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("user_token");

  const handleLogout = () => {
    localStorage.removeItem("user_token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2 className="brand-name">Eldo-Poultry</h2>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-button">Home</Link>
        </li>
        <li>
          <Link to="/order" className="nav-button">Place Order</Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Logout onLogout={handleLogout} />
          </li>
        ) : (
          <li>
            <Link to="/login" className="nav-button">Login/SignUp</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
