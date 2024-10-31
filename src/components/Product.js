// src/components/Product.js
import React from 'react';

function Product({ product, addToCart }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 bg-white">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-48 object-contain mb-4 rounded"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-green-600 font-bold text-lg">${product.price.toFixed(2)}</p>
      <button
        className="bg-primary text-darkred p-3 mt-4 w-full rounded hover:bg-blue-600 transition-colors duration-300"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
