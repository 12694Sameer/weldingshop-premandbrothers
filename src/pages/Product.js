import React from 'react';
import ProductForm from '../components/ProductForm';
import ProductTable from '../components/ProductTable';

export default function Jobs() {
  return (
    <div className="container my-4">
      <ProductForm />
      <hr />
      <ProductTable />
    </div>
  );
}
