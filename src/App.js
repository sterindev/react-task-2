// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductsPage from './pages/ProductsPage';
import CartPage from './pages/CartPage';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const itemExists = prevItems.find(item => item.id === product.id);
      if (itemExists) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(prevItems =>
      prevItems.map(item => (item.id === id ? { ...item, quantity: Math.max(quantity, 1) } : item))
    );
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.reduce((acc, item) => acc + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<ProductsPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
