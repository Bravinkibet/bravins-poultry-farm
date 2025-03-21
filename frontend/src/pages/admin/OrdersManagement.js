// src/pages/admin/OrdersManagement.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/AdminOrders.css";

const OrdersManagement = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/orders");
      setOrders(res.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleUpdateOrder = async (order) => {
    const newStatus = prompt("Update order status:", order.status);
    if (newStatus) {
      try {
        await axios.put(`http://127.0.0.1:5000/orders/${order.id}`, { status: newStatus });
        fetchOrders();
      } catch (error) {
        console.error("Error updating order:", error);
      }
    }
  };

  const handleDeleteOrder = async (orderId) => {
    if (window.confirm("Are you sure you want to delete this order?")) {
      try {
        await axios.delete(`http://127.0.0.1:5000/orders/${orderId}`);
        fetchOrders();
      } catch (error) {
        console.error("Error deleting order:", error);
      }
    }
  };

  return (
    <div className="orders-management-page">
      <h1>Orders Management</h1>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Total Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customerName || "N/A"}</td>
              <td>${order.totalPrice ? order.totalPrice.toFixed(2) : "0.00"}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => handleUpdateOrder(order)}>Update Status</button>
                <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrdersManagement;
