import React from 'react';

export default function Cart() {
  const cartItems = [
    { id: 1, name: 'Example Product 1', price: 100, quantity: 1 },
  ];

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 && (
        <p>Your cart is empty.</p>
      )}
      {cartItems.length > 0 && (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border p-2 mb-2">
              <p>{item.name}</p>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}
          <p className="font-bold mt-2">Total: ${totalAmount}</p>
          <button className="bg-green-500 text-white px-4 py-2 mt-4 cursor-pointer">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}