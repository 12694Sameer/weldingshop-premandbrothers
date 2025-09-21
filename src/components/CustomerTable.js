import React from 'react';

const CustomerTable = () => {
  const customers = [
    { id: 1, name: 'Rajesh Kumar', contact: '9876543210', city: 'Lucknow' },
    { id: 2, name: 'Priya Sharma', contact: '9123456789', city: 'Kanpur' },
    { id: 3, name: 'Amit Verma', contact: '9988776655', city: 'Varanasi' },
    { id: 4, name: 'Neha Singh', contact: '9001122334', city: 'Allahabad' },
    { id: 5, name: 'Vikram Chauhan', contact: '8899776655', city: 'Agra' },
  ];

  return (
    <div style={{ padding: '1rem' }}>
      <h2>🧑‍💼 Customer List</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#f4f4f4' }}>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>Contact</th>
            <th style={{ border: '1px solid #ccc', padding: '8px' }}>City</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{customer.id}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{customer.name}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{customer.contact}</td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}>{customer.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;
