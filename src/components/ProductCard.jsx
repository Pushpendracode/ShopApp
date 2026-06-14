import React from 'react';
import { useCart } from '../context/CartContext';

/**
 * ProductCard — displays a single product with add/remove cart button
 */
const ProductCard = ({ product }) => {
  const { addToCart, removeFromCart, isInCart } = useCart();
  const inCart = isInCart(product.id);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-200">
      {/* Product Image */}
      <div className="h-56 flex items-center justify-center p-4 bg-gray-50">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-gray-800 font-semibold text-sm mb-1 line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-500 text-xs mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="mt-auto flex items-center justify-between">
          <span className="text-yellow-600 font-bold text-lg">
            ${product.price.toFixed(2)}
          </span>
          <span className="text-xs text-gray-400 capitalize bg-gray-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        {/* Add/Remove Button */}
        <button
          onClick={() => inCart ? removeFromCart(product.id) : addToCart(product)}
          className={`mt-3 w-full py-2 rounded-lg font-bold text-sm transition ${
            inCart
              ? 'bg-red-500 text-white hover:bg-red-600'
              : 'bg-yellow-400 text-black hover:bg-yellow-500'
          }`}
        >
          {inCart ? '🗑️ Remove from Cart' : '🛒 Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;