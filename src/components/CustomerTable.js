import React, { useEffect, useState } from 'react';
import { getCustomers } from '../api';

export default function CustomerTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(res => setCustomers(res.data));
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-primary text-white">Customer List</div>
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map(c => (
              <tr key={c._id}>
                <td>{c.name}</td>
                <td>{c.phone}</td>
                <td>{c.address}</td>
                <td>{c.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
