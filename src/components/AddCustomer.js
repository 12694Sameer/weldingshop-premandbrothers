import React, { useState } from 'react';
import { addCustomer } from '../api';

export default function AddCustomer() {
  const [form, setForm] = useState({ name: '', phone: '', address: '', email: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addCustomer(form);
      alert('Customer added!');
      setForm({ name: '', phone: '', address: '', email: '' });
    } catch (err) {
      alert('Error: ' + err.response?.data?.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} required />
      <input name="address" placeholder="Address" value={form.address} onChange={handleChange} />
      <input name="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <button type="submit">Add Customer</button>
    </form>
  );
}
