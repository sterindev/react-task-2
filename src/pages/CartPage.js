// src/pages/CartPage.js
import React from 'react';
import Cart from '../components/Cart';

function CartPage({ cartItems, updateQuantity, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Your Cart</h1>
      <Cart cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
      <p className="text-lg font-bold mt-4">Total Price (10% Discount): ${discountedTotal.toFixed(2)}</p>
    </div>
  );
}

export default CartPage;
