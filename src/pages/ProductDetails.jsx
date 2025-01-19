import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetails() {
  const { productId } = useParams();

  const exampleProduct = {
    id: productId,
    name: `Example Product ${productId}`,
    price: 100,
    description: 'Example product description...'
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{exampleProduct.name}</h2>
      <p>Price: ${exampleProduct.price}</p>
      <p className="mt-2">{exampleProduct.description}</p>
      <div className="mt-4">
        <button className="bg-blue-500 text-white px-4 py-2 cursor-pointer">Add to Cart</button>
      </div>
      <div className="mt-4">
        <Link to="/" className="text-blue-500 underline">Back to Products</Link>
      </div>
    </div>
  );
}