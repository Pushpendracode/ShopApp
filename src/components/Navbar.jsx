import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/**
 * Navbar — navigation with cart item count badge
 */
const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <nav className="bg-gray-900 border-b border-gray-700 px-6 py-4 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-400">
          🛍️ ShopApp
        </Link>
        <Link
          to="/cart"
          className="relative flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 transition"
        >
          🛒 Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;