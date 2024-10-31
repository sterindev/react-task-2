// src/components/Cart.js
import React from 'react';

function Cart({ cartItems, updateQuantity, removeFromCart }) {
  return (
    <div className="p-4">
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="flex justify-between mb-4">
            <h2>{item.title}</h2>
            <p>Price: ${item.price}</p>
            <p>Quantity: 
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
              {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
            </p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button
              className="mt-4 bg-red-500 text-Red px-4 py-2 rounded"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
