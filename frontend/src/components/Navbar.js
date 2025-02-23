import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Eldo-Poultry</h2>
      <ul className="nav-links">
        <li><Link to="/" className="nav-button">Home</Link></li>
        <li><Link to="/order" className="nav-button">Order</Link></li>
        <li><Link to="/login" className="nav-button">Login</Link></li>
        <li><Link to="/#dashboard" className="nav-button">Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
