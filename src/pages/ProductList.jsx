import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductList() {
  const products = [
    { id: 1, name: 'Example Product 1', price: 100 },
    { id: 2, name: 'Example Product 2', price: 200 },
  ];

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Products</h1>
      <ul className="space-y-2">
        {products.map((item) => (
          <li key={item.id} className="border p-2">
            <Link to={`/product/${item.id}`} className="text-blue-500 underline">
              {item.name}
            </Link>
            <p>Price: ${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}