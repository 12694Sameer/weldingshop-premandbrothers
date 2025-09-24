import React, { useEffect, useState } from 'react';
import { getCustomers } from '../api';

export default function CustomerTable() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then(res => setCustomers(res.data));
  }, []);

  return (
    <div className="container my-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">Customer List</div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th className="d-none d-sm-table-cell">Address</th>
                  <th className="d-none d-sm-table-cell">Email</th>
                </tr>
              </thead>
              <tbody>
                {customers.map(c => (
                  <tr key={c._id}>
                    <td>{c.name}</td>
                    <td>{c.phone}</td>
                    <td className="d-none d-sm-table-cell">{c.address}</td>
                    <td className="d-none d-sm-table-cell">{c.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {customers.length === 0 && (
              <div className="text-center text-muted py-3">No customers found.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
