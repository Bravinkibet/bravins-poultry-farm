// src/pages/ProductsManagement.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/Admin.css';

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className="admin-main-content">
      <h2>Products Management</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Stock</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>{product.type}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsManagement;
