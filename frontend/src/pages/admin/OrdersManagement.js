// src/pages/Orders.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/Admin.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/admin/orders')
      .then(response => setOrders(response.data))
      .catch(error => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="admin-content">
      <h2>Orders Management</h2>
      <ul>{orders.map(order => (<li key={order.id}>Order {order.id} - ${order.totalPrice}</li>))}</ul>
    </div>
  );
};

export default Orders;
