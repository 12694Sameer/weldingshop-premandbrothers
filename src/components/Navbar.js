import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#1F4E79' }}>
    <div className="container-fluid">
      <Link className="navbar-brand d-flex align-items-center" to="/">
        {/* <img
          src="/images/logo.png"
          alt="Prem & Brothers Logo"
          style={{ height: '40px', marginRight: '10px' }}
        /> */}
        <img src={`${process.env.PUBLIC_URL}/logo.png`} 
        alt="Prem & Brothers Logo"
          style={{ height: '40px', marginRight: '10px' }}
        />
        <span className="fw-bold">Prem & Brothers</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/customers">Customers</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/jobs">Product</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/completed">Completed Products</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/products">Add Product</Link>
          </li>
          <li className="nav-item">
  <Link className="nav-link" to="/add-customer">Add CustomerV1</Link>
</li>
<li className="nav-item">
  <Link className="nav-link" to="/add-product">Add ProductV1</Link>
</li> */}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
