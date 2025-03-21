// src/pages/Admin.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import '../styles/Admin.css';

const Admin = () => {
  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li><Link to="/admin/overview">Overview</Link></li>
            <li><Link to="/admin/users">Users Management</Link></li>
            <li><Link to="/admin/orders">Orders Management</Link></li>
            <li><Link to="/admin/products">Products Management</Link></li>
            <li><Link to="/">Logout</Link></li>
          </ul>
        </nav>
      </aside>

      <div className="admin-main">
        {/* This is where Overview, Users, Orders, etc. will appear */}
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
