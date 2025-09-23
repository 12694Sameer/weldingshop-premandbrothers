import React from 'react';

const completedItems = [
  {
    id: 1,
    name: 'Steel Gate',
    image: `${process.env.PUBLIC_URL}/images/steel-gate.jpg`,
    description: 'Heavy-duty steel gate completed for client in Sitapur.',
  },
  {
    id: 2,
    name: 'Iron Grill',
    image: `${process.env.PUBLIC_URL}/images/iron-grill.jpg`,
    description: 'Custom iron grill installed at Prem & Brothers workshop.',
  },
  // Add more products here
];

const CompletedProducts = () => {
  return (
    <div className="completed-products">
      <h2>Completed Products</h2>
      <div className="product-list">
        {completedItems.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedProducts;
