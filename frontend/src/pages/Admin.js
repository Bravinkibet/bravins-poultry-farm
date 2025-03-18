// src/pages/Admin.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

const Admin = () => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [stock, setStock] = useState([]);
  const [recentOrders, setRecentOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [ordersRes, usersRes, stockRes] = await Promise.all([
          axios.get('http://127.0.0.1:5000/orders'),
          axios.get('http://127.0.0.1:5000/users'),
          axios.get('http://127.0.0.1:5000/stock'),
        ]);

        setOrdersCount(ordersRes.data.length);
        setRevenue(ordersRes.data.reduce((acc, order) => acc + (order.totalPrice || 0), 0).toFixed(2));
        setActiveUsers(usersRes.data.filter(user => user.isActive).length);
        setStock(stockRes.data);
        setRecentOrders(ordersRes.data.slice(0, 5));
        setUsers(usersRes.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchDashboardData();
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredUsers = users.filter(user =>
    Object.values(user).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="admin-dashboard">
      <aside className="admin-sidebar">
        <h2>Admin Dashboard</h2>
        <nav>
          <ul>
            <li><a href="/overview">Overview</a></li>
            <li><a href="/users">Users Management</a></li>
            <li><a href="/orders">Orders Management</a></li>
            <li><a href="/products">Products Management</a></li>
            <li><a href="/logout">Logout</a></li>
          </ul>
        </nav>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearch} />
          <div className="admin-profile">
            <img src="https://via.placeholder.com/40" alt="Admin" />
            <span>Admin</span>
          </div>
        </header>

        <section className="admin-content">
          <div className="admin-cards">
            {[
              { title: 'Total Orders', value: ordersCount },
              { title: 'Total Revenue', value: `$${revenue}` },
              { title: 'Active Users', value: activeUsers },
              { title: 'Stock', value: stock.length },
            ].map((metric, index) => (
              <div className="admin-card" key={index}>
                <h3>{metric.title}</h3>
                <p>{metric.value}</p>
              </div>
            ))}
          </div>

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
              {recentOrders.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName}</td>
                  <td>${order.totalPrice.toFixed(2)}</td>
                  <td>{order.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h3>Users</h3>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export default Admin;
