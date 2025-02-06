import React, { useState } from 'react';
import axios from 'axios';
import '../styles/OrderForm.css'; // Make sure to create this CSS file for styling

const OrderForm = () => {
  // Set up initial state for the order form fields
  const [order, setOrder] = useState({
    user_id: '',
    product_id: '',
    quantity: '',
  });

  // Handle input changes by updating the state
  const handleChange = (e) => {
    setOrder({
      ...order,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission: send order data to the backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/orders/create', order);
      alert('Order placed successfully!');
      console.log('Response:', response.data);
      // Optionally, reset the form after submission
      setOrder({
        user_id: '',
        product_id: '',
        quantity: '',
      });
    } catch (error) {
      console.error('Error placing order:', error);
      alert('Error placing order.');
    }
  };

  return (
    <div className="order-form-container">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        <div className="form-field">
          <label htmlFor="user_id">User ID:</label>
          <input
            type="text"
            id="user_id"
            name="user_id"
            value={order.user_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="product_id">Product ID:</label>
          <input
            type="text"
            id="product_id"
            name="product_id"
            value={order.product_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={order.quantity}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit Order</button>
      </form>
    </div>
  );
};

export default OrderForm;
