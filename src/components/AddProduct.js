import React, { useState, useEffect } from 'react';
import { addProduct, getCustomers } from '../api';

export default function AddProduct() {
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
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Product Name" value={form.name} onChange={handleChange} required />
      <input name="description" placeholder="Description" value={form.description} onChange={handleChange} />
      <input name="status" placeholder="Status" value={form.status} onChange={handleChange} />
      <select name="customerId" value={form.customerId} onChange={handleChange} required>
        <option value="">Select Customer</option>
        {customers.map(c => (
          <option key={c._id} value={c._id}>{c.name}</option>
        ))}
      </select>
      <button type="submit">Add Product</button>
    </form>
  );
}
