import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <BannerCarousel />

      <h1>🔧 प्रेम एंड ब्रदर्स इंजीनियरिंग और वेल्डिंग वर्कशॉप में आपका स्वागत है</h1>
      <p>Manage customers, jobs, inventory, and invoices with ease.</p>

      <h3>🚀 Quick Navigation</h3>
      <ul>
        <li><Link to="/customers">Manage Customers</Link></li>
        <li><Link to="/jobs">Track Welding Jobs</Link></li>
      </ul>
    </div>
  );
};

export default Home;
