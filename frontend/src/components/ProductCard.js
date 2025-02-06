// src/components/ProductCard.js
import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Category: {product.category}</p>
      <p>Price: KES {product.price}</p>
      <p>Stock: {product.stock} left</p>
    </div>
  );
};

export default ProductCard;
