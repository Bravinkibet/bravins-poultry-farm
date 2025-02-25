import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logout from "./Logout"; // Import the Logout component
import "../styles/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  // Check login status by verifying that a token exists in localStorage.
  const isLoggedIn = !!localStorage.getItem("user_token");

  // Pass a logout function to the Logout component so that it clears the token.
  const handleLogout = () => {
    localStorage.removeItem("user_token");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Eldo-Poultry</h2>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-button">
            Home
          </Link>
        </li>
        <li>
          <Link to="/order" className="nav-button">
            Place Order
          </Link>
        </li>
        {isLoggedIn ? (
          <li>
            <Logout onLogout={handleLogout} />
          </li>
        ) : (
          <li>
            <Link to="/login" className="nav-button">
              Login/SignUp
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
