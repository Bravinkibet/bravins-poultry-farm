import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/OrderForm.css';

const OrderForm = () => {
  // Order state including fields for all product types
  const [order, setOrder] = useState({
    firstName: '',
    product: '', // eggs, chicks, chicken
    eggsType: '', // if product === 'eggs': 'kienyeji' or 'improved kienyeji'
    chicksType: '', // if product === 'chicks': 'kienyeji' or 'improved kienyeji'
    chicksAge: '',  // if product === 'chicks': age option
    chickenType: '', // if product === 'chicken': 'jogoo' or 'hen'
    chickenBreed: '', // if product === 'chicken': 'kienyeji' or 'improved kienyeji'
    quantity: 0,
  });

  // Calculated price for eggs/chicks
  const [calculatedPrice, setCalculatedPrice] = useState(0);
  // Confirmation message (in-page notification)
  const [confirmationMessage, setConfirmationMessage] = useState('');

  // Price mapping for eggs
  const eggPrices = {
    kienyeji: 15,
    'improved kienyeji': 13,
  };

  // Base prices for improved chicks based on age
  const improvedChickPrices = {
    '1 day': 100,
    '1 week': 150,
    '2 weeks': 200,
    '3 weeks': 250,
    '1 month': 300,
    '2 months': 350,
    '3 months': 400,
    '4 months': 450,
  };

  // Weeks count for each age option (for kienyeji chicks, add 5 shillings per week)
  const ageToWeeks = {
    '1 day': 0,
    '1 week': 1,
    '2 weeks': 2,
    '3 weeks': 3,
    '1 month': 4,
    '2 months': 8,
    '3 months': 12,
    '4 months': 16,
  };

  // Auto-calculate price whenever relevant fields change
  useEffect(() => {
    const qty = Number(order.quantity);
    let price = 0;
    if (order.product === 'eggs' && order.eggsType && qty > 0) {
      price = qty * eggPrices[order.eggsType];
    } else if (order.product === 'chicks' && order.chicksType && order.chicksAge && qty > 0) {
      const basePrice = improvedChickPrices[order.chicksAge] || 0;
      if (order.chicksType === 'improved kienyeji') {
        price = qty * basePrice;
      } else if (order.chicksType === 'kienyeji') {
        // Add 5 shillings per week to the base price for kienyeji chicks
        const extra = 5 * (ageToWeeks[order.chicksAge] || 0);
        price = qty * (basePrice + extra);
      }
    }
    setCalculatedPrice(price);
  }, [order]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a description of the order based on product type
    let productDescription = '';
    if (order.product === 'eggs') {
      productDescription = `${order.quantity} ${order.eggsType} eggs`;
    } else if (order.product === 'chicks') {
      productDescription = `${order.quantity} ${order.chicksType} chicks (${order.chicksAge})`;
    } else if (order.product === 'chicken') {
      productDescription = `${order.quantity} ${order.chickenBreed} ${order.chickenType} chicken(s)`;
    }
    const priceInfo = (order.product === 'chicken') 
      ? 'Price Range: 500 - 1000 shillings'
      : `Total Price: ${calculatedPrice} shillings`;

    // Uncomment and adjust the axios post as needed for your backend integration
  
    try {
      const response = await axios.post('http://127.0.0.1:5000/orders/create', order);
      console.log(response.data);
    } catch (error) {
      console.error('Error placing order:', error);
    }

    // Set in-page confirmation message
    setConfirmationMessage(`Thank you ${order.firstName}! For purchasing ${productDescription} (${priceInfo}) Eldo-Poultry, your order is pending. To complete the order or make negotiations, please contact 0741937056 and indicate whether payment is via MPesa or Cash on Delivery. Your satisfaction is our priority.`);
  };

  return (
    <div className="order-form-container">
      <h2>Place Your Order</h2>
      <form onSubmit={handleSubmit} className="order-form">
        {/* First Name for personalized notification */}
        <div className="form-field">
          <label htmlFor="firstName">First Name:</label>
          <input 
            type="text" 
            id="firstName" 
            name="firstName" 
            value={order.firstName} 
            onChange={handleChange} 
            required 
          />
        </div>

        {/* Product Selection Dropdown */}
        <div className="form-field">
          <label htmlFor="product">Select Product:</label>
          <select name="product" id="product" onChange={handleChange} required value={order.product}>
            <option value="">-- Choose a product --</option>
            <option value="eggs">Eggs</option>
            <option value="chicks">Chicks</option>
            <option value="chicken">Chicken</option>
          </select>
        </div>

        {/* Conditional fields based on product selection */}
        {order.product === 'eggs' && (
          <div className="form-field">
            <label htmlFor="eggsType">Egg Type:</label>
            <select name="eggsType" id="eggsType" onChange={handleChange} required value={order.eggsType}>
              <option value="">-- Choose egg type --</option>
              <option value="kienyeji">Kienyeji</option>
              <option value="improved kienyeji">Improved Kienyeji</option>
            </select>
          </div>
        )}

        {order.product === 'chicks' && (
          <>
            <div className="form-field">
              <label htmlFor="chicksType">Chick Type:</label>
              <select name="chicksType" id="chicksType" onChange={handleChange} required value={order.chicksType}>
                <option value="">-- Choose chick type --</option>
                <option value="kienyeji">Kienyeji</option>
                <option value="improved kienyeji">Improved Kienyeji</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="chicksAge">Age:</label>
              <select name="chicksAge" id="chicksAge" onChange={handleChange} required value={order.chicksAge}>
                <option value="">-- Choose age --</option>
                <option value="1 day">1 Day</option>
                <option value="1 week">1 Week</option>
                <option value="2 weeks">2 Weeks</option>
                <option value="3 weeks">3 Weeks</option>
                <option value="1 month">1 Month</option>
                <option value="2 months">2 Months</option>
                <option value="3 months">3 Months</option>
                <option value="4 months">4 Months</option>
              </select>
            </div>
          </>
        )}

        {order.product === 'chicken' && (
          <>
            <div className="form-field">
              <label htmlFor="chickenType">Chicken Type:</label>
              <select name="chickenType" id="chickenType" onChange={handleChange} required value={order.chickenType}>
                <option value="">-- Choose chicken type --</option>
                <option value="jogoo">Jogoo</option>
                <option value="hen">Hen</option>
              </select>
            </div>
            <div className="form-field">
              <label htmlFor="chickenBreed">Breed:</label>
              <select name="chickenBreed" id="chickenBreed" onChange={handleChange} required value={order.chickenBreed}>
                <option value="">-- Choose breed --</option>
                <option value="kienyeji">Kienyeji</option>
                <option value="improved kienyeji">Improved Kienyeji</option>
              </select>
            </div>
          </>
        )}

        {/* Common Quantity Field */}
        {order.product && (
          <div className="form-field">
            <label htmlFor="quantity">Quantity:</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={order.quantity}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
        )}

        {/* Price Display for Eggs and Chicks, and Price Range for Chicken */}
        {order.product === 'eggs' && order.quantity > 0 && order.eggsType && (
          <div className="price-display">
            <p>Total Price: {calculatedPrice} shillings</p>
          </div>
        )}
        {order.product === 'chicks' && order.quantity > 0 && order.chicksType && order.chicksAge && (
          <div className="price-display">
            <p>Total Price: {calculatedPrice} shillings</p>
          </div>
        )}
        {order.product === 'chicken' && (
          <div className="price-display">
            <p>Price Range: 500 - 1000 shillings</p>
          </div>
        )}

        <button type="submit" className="order-submit-btn">Submit Order</button>
      </form>
      
      {/* In-page confirmation message */}
      {confirmationMessage && (
        <div className="confirmation-message">
          <p>{confirmationMessage}</p>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
