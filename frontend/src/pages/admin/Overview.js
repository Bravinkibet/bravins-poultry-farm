// src/pages/admin/Overview.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/AdminOverview.css";

const Overview = () => {
  const [ordersCount, setOrdersCount] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const [stock, setStock] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [ordersRes, usersRes, stockRes] = await Promise.all([
          axios.get("http://127.0.0.1:5000/orders"),
          axios.get("http://127.0.0.1:5000/users"),
          axios.get("http://127.0.0.1:5000/stock"),
        ]);
        setOrdersCount(ordersRes.data.length);
        setRevenue(ordersRes.data.reduce((acc, order) => acc + (order.totalPrice || 0), 0).toFixed(2));
        setActiveUsers(usersRes.data.filter(user => user.isActive).length);
        setStock(stockRes.data);
      } catch (error) {
        console.error("Error fetching overview data:", error);
      }
    };

    fetchData();
  }, []);

  const stockBreakdown = stock.reduce((acc, item) => {
    const { category, stock: qty, age } = item;
    if (!acc[category]) acc[category] = { total: 0, chicks: 0 };
    acc[category].total += qty;
    if (age && age < 6) acc[category].chicks += qty;
    return acc;
  }, {});

  return (
    <div className="overview-page">
      <h1>Overview</h1>
      <div className="admin-cards">
        <div className="admin-card">
          <h3>Total Orders</h3>
          <p>{ordersCount}</p>
        </div>
        <div className="admin-card">
          <h3>Total Revenue</h3>
          <p>${revenue}</p>
        </div>
        <div className="admin-card">
          <h3>Active Users</h3>
          <p>{activeUsers}</p>
        </div>
        <div className="admin-card">
          <h3>Stock Breakdown</h3>
          <ul>
            {Object.keys(stockBreakdown).map((key) => (
              <li key={key}>
                {key}: {stockBreakdown[key].total} (Chicks: {stockBreakdown[key].chicks})
              </li>
            ))}
          </ul>
        </div>
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
          {/** Display the 5 most recent orders */}
          {ordersCount > 0 && (
            axios.get("http://127.0.0.1:5000/orders").then(res => {
              const recent = res.data.slice(0, 5);
              return recent.map(order => (
                <tr key={order.id}>
                  <td>{order.id}</td>
                  <td>{order.customerName || "N/A"}</td>
                  <td>${order.totalPrice ? order.totalPrice.toFixed(2) : "0.00"}</td>
                  <td>{order.status}</td>
                </tr>
              ));
            })
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
