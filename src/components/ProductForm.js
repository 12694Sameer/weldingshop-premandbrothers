import React, { useState, useEffect } from 'react';
import { addProduct, getCustomers } from '../api';

export default function ProductForm() {
  const [form, setForm] = useState({ name: '', description: '', status: '', customerId: '' });
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(res => setCustomers(res.data));
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(form);
      alert('Product added!');
      setForm({ name: '', description: '', status: '', customerId: '' });
    } catch (err) {
      alert('Error: ' + err.response?.data?.error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-secondary text-white">Add Product</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Product Name</label>
            <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Description</label>
            <input name="description" className="form-control" value={form.description} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Status</label>
            <input name="status" className="form-control" value={form.status} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Customer</label>
            <select name="customerId" className="form-select" value={form.customerId} onChange={handleChange} required>
              <option value="">Select Customer</option>
              {customers.map(c => (
                <option key={c._id} value={c._id}>{c.name}</option>
              ))}
            </select>
          </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  );
}
