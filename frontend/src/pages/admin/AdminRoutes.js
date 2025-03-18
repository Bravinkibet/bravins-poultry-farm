// src/pages/AdminRoutes.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Overview from '../Overview';
import Users from './Users';
import Orders from './Orders';
import Products from '../Products';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="overview" element={<Overview />} />
      <Route path="users" element={<Users />} />
      <Route path="orders" element={<Orders />} />
      <Route path="products" element={<Products />} />
    </Routes>
  );
};

export default AdminRoutes;
