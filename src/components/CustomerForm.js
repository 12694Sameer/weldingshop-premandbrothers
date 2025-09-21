import React, { useState } from 'react';

const CustomerForm = ({ addCustomer }) => {
  const [name, setName] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    addCustomer({ name });
    setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Customer Name" 
        value={name} 
        onChange={e => setName(e.target.value)} 
      />
      <button type="submit">Add Customer</button>
    </form>
  );
};

export default CustomerForm;
