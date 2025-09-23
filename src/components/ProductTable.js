import React, { useEffect, useState } from 'react';
import { getProducts } from '../api';

export default function ProductTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(res => setProducts(res.data));
  }, []);

  return (
    <div className="card shadow-sm">
      <div className="card-header bg-secondary text-white">Product List</div>
      <div className="card-body">
        <table className="table table-bordered table-hover">
          <thead className="table-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Customer</th>
            </tr>
          </thead>
          <tbody>
            {products.map(p => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{p.status}</td>
                <td>{p.customerId?.name || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
