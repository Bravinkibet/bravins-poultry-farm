// src/pages/Products.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../admin/Admin.css';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/products')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="admin-content">
      <h2>Products Management</h2>
      <ul>{products.map(product => (<li key={product.id}>{product.name} - ${product.price}</li>))}</ul>
    </div>
  );
};

export default Products;
