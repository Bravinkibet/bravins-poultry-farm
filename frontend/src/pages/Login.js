// src/pages/Login.js
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="form-container">
        <form>
          <h2>Log In</h2>
          <div className="form-group">
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="login-btn">
            Log In
          </button>
        </form>
        <p className="signup-link">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
