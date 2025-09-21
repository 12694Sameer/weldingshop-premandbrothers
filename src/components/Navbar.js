import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav style={{ 
    backgroundColor: '#1f2937', // Dark gray-blue
    padding: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    color: 'white'
  }}>
    <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
    <Link to="/customers" style={{ color: 'white', textDecoration: 'none' }}>Customers</Link>
    <Link to="/jobs" style={{ color: 'white', textDecoration: 'none' }}>Jobs</Link>
  </nav>
);

export default Navbar;
