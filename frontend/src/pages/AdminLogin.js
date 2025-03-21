// src/pages/AdminLogin.js
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://127.0.0.1:5000/auth/admin-login", loginData);
      if (response.data.admin) {
        // Store admin session data
        localStorage.setItem("admin", JSON.stringify(response.data));
        // Redirect to admin dashboard overview
        navigate("/admin/overview");
      } else {
        alert("Invalid admin credentials");
      }
    } catch (error) {
      console.error("Error during admin login:", error);
      alert("Admin login failed.");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-form-container">
        <form onSubmit={handleSubmit}>
          <h2>Admin Log In</h2>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={loginData.email}
              onChange={handleChange}
              placeholder="Admin Email"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={loginData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit" className="admin-login-btn">Log In</button>
        </form>
        <p className="back-home-link">
          <Link to="/">Back to Home</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
