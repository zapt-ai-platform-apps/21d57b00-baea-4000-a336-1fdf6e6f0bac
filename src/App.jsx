import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ProductList from './pages/ProductList';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';

export default function App() {
  return (
    <Router>
      <nav className="bg-gray-100 p-4 flex gap-4">
        <Link to="/" className="text-blue-500">Home</Link>
        <Link to="/cart" className="text-blue-500">Cart</Link>
      </nav>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
}