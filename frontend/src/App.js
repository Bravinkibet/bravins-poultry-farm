// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import OrderPage from './pages/OrderPage';
// If you use Logout as a separate component in the navbar or elsewhere, import it as needed.
// import Logout from './components/Logout';
import './styles/App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      {/* The following Routes load the different pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<Products />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
