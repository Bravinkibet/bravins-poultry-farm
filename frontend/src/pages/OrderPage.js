import React, { useState } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [order, setOrder] = useState({ user_id: '', product_id: '', quantity: '' });

  const handleChange = (e) => {
    setOrder({ ...order, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:5000/orders/create', order)
      .then(() => alert('Order placed successfully!'))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Place an Order</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="user_id" placeholder="User ID" onChange={handleChange} />
        <input type="text" name="product_id" placeholder="Product ID" onChange={handleChange} />
        <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
        <button type="submit">Order Now</button>
      </form>
    </div>
  );
};

export default OrderPage;
