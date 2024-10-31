// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ cartCount }) {
  return (
    <nav className="bg-orange-500 p-4 text-black flex justify-between">
      <Link to="/" className="text-lg font-bold">Products</Link>
      <Link to="/cart" className="text-lg">
        Cart ({cartCount})
      </Link>
    </nav>
  );
}

export default Navbar;
