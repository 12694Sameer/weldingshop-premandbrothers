import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Customers from './pages/Customers';
import Jobs from './pages/Product';
import CompletedProducts from './components/CompletedProducts';
import ProductForm from './components/ProductForm';
import ProductTable from './components/ProductTable';
import CustomerForm from './components/CustomerForm';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <main className="flex-grow-1">
          <div className="container py-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/add-customer" element={<CustomerForm />} />
              <Route path="/jobs" element={<Jobs />} />
              <Route path="/completed" element={<CompletedProducts />} />
              <Route path="/add-product" element={<ProductForm />} />
              <Route path="/products" element={<ProductTable />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetails />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
