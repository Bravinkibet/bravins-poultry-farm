// src/pages/admin/ProductsManagement.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/AdminProducts.css";

const ProductsManagement = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/stock");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = async () => {
    const name = prompt("Enter product name:");
    const category = prompt("Enter product category:");
    const price = parseFloat(prompt("Enter product price:"));
    const quantity = parseInt(prompt("Enter quantity:"), 10);
    const age = parseInt(prompt("Enter age (in months):"), 10);
    const available = window.confirm("Is this product available?");
    if (name && category && !isNaN(price) && !isNaN(quantity)) {
      try {
        await axios.post("http://127.0.0.1:5000/stock", { name, category, price, stock: quantity, age, available });
        fetchProducts();
      } catch (error) {
        console.error("Error adding product:", error);
      }
    }
  };

  const handleEditProduct = async (product) => {
    const newName = prompt("Edit product name:", product.name);
    const newCategory = prompt("Edit product category:", product.category);
    const newPrice = parseFloat(prompt("Edit product price:", product.price));
    const newQuantity = parseInt(prompt("Edit quantity:", product.stock), 10);
    const newAge = parseInt(prompt("Edit age (in months):", product.age), 10);
    const available = window.confirm("Is this product available?");
    if (newName && newCategory && !isNaN(newPrice) && !isNaN(newQuantity)) {
      try {
        await axios.put(`http://127.0.0.1:5000/stock/${product.id}`, { name: newName, category: newCategory, price: newPrice, stock: newQuantity, age: newAge, available });
        fetchProducts();
      } catch (error) {
        console.error("Error editing product:", error);
      }
    }
  };

  const handleDeleteProduct = async (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://127.0.0.1:5000/stock/${productId}`);
        fetchProducts();
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  return (
    <div className="products-management-page">
      <h1>Products Management</h1>
      <button onClick={handleAddProduct}>Add Product</button>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Age (months)</th>
            <th>Available</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>{product.stock}</td>
              <td>{product.age}</td>
              <td>{product.available ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleEditProduct(product)}>Edit</button>
                <button onClick={() => handleDeleteProduct(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsManagement;
