import React from 'react';
import CustomerForm from '../components/CustomerForm';
import CustomerTable from '../components/CustomerTable';

export default function Customers() {
  return (
    <div className="container my-4">
      <CustomerForm />
      <hr />
      <CustomerTable />
    </div>
  );
}
