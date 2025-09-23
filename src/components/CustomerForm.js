import React, { useState } from 'react';
import { addCustomer } from '../api';

export default function CustomerForm() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', email: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addCustomer(form);
      alert('Customer added!');
      setForm({ name: '', phone: '', address: '', email: '' });
    } catch (err) {
      alert('Error: ' + err.response?.data?.error);
    }
  };

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">Add Customer</div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input name="name" className="form-control" value={form.name} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input name="phone" className="form-control" value={form.phone} onChange={handleChange} required />
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input name="address" className="form-control" value={form.address} onChange={handleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input name="email" type="email" className="form-control" value={form.email} onChange={handleChange} />
          </div>
          <button type="submit" className="btn btn-success">Add Customer</button>
        </form>
      </div>
    </div>
  );
}
