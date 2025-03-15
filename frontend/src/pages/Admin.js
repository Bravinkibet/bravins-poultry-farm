// src/pages/Admin.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

const Admin = () => {
  // State variables for dashboard metrics
  const [ordersCount, setOrdersCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [stock, setStock] = useState(0);
  const [pendingDeliveries, setPendingDeliveries] = useState(0);
  const [recentOrders, setRecentOrders] = useState([]);

  // Fetch data from backend API on component mount
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/orders');
        const orders = response.data;

        setOrdersCount(orders.length);
        setRevenue(orders.reduce((acc, order) => acc + (order.totalPrice || 0), 0).toFixed(2));

        // Additional metrics (replace with real API data)
        setActiveUsers(50);
        setStock(200);
        setPendingDeliveries(orders.filter(order => order.status === 'Pending').length);
        setRecentOrders(orders.slice(0, 5));
      } catch (error) {
        console.error('Error fetching orders:', error);
        // Fallback dummy data
        setOrdersCount(20);
        setRevenue(1500);
        setActiveUsers(50);
        setStock(200);
        setPendingDeliveries(5);
        setRecentOrders([]);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li><a href="#overview">Overview</a></li>
            <li><a href="#users">Users Management</a></li>
            <li><a href="#orders">Orders Management</a></li>
            <li><a href="#products">Products Management</a></li>
            <li><a href="#reports">Reports</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <input type="text" placeholder="Search..." aria-label="Search" />
          <div className="admin-notifications">
            <span>Notifications</span>
          </div>
          <div className="admin-profile">
            <img src="https://via.placeholder.com/40" alt="Admin Profile" />
            <span>Admin</span>
          </div>
        </header>

        <section className="admin-content">
          <div className="admin-cards">
            {[
              { title: 'Total Orders', value: ordersCount },
              { title: 'Total Revenue', value: `$${revenue}` },
              { title: 'Active Users', value: activeUsers },
              { title: 'Stock', value: stock },
              { title: 'Pending Deliveries', value: pendingDeliveries },
            ].map((metric, index) => (
              <div className="admin-card" key={index}>
                <h3>{metric.title}</h3>
                <p>{metric.value}</p>
              </div>
            ))}
          </div>

          <div className="admin-table-section">
            <h3>Recent Orders</h3>
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Total Price</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.length > 0 ? (
                  recentOrders.map(order => (
                    <tr key={order.id}>
                      <td>{order.id}</td>
                      <td>{order.customerName || 'N/A'}</td>
                      <td>${order.totalPrice?.toFixed(2) || '0.00'}</td>
                      <td>{order.status || 'Pending'}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4">No recent orders</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Admin;
