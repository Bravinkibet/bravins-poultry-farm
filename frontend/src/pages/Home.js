// src/pages/Home.js
import React from 'react';
import '../styles/App.css';
import logo from '../img/page_logo.jpg';
import image2 from '../img/page2.jpg';
import image3 from '../img/page3.jpg';
import image4 from '../img/pages.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Bravin’s Poultry Farm</h1>
      <p>Healthy Chickens, Delicious Eggs – Straight from the Farm!</p>
      <div className="image-gallery">
        <img src={logo} alt="Logo" />
        <img src={image2} alt="Page 2" />
        <img src={image3} alt="Page 3" />
        <img src={image4} alt="Pages" />
      </div>
    </div>
  );
};

export default Home;
