import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

/**
 * CartPage — shows cart items with qty controls, totals and 10% discount
 */
const CartPage = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, totalPrice } = useCart();

  const discount = totalPrice * 0.1;
  const finalPrice = totalPrice - discount;

  if (cartItems.length === 0) return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <p className="text-6xl mb-4">🛒</p>
      <p className="text-2xl text-gray-600 font-bold mb-4">Your cart is empty!</p>
      <Link
        to="/"
        className="px-6 py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
      >
        ← Continue Shopping
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>
          <Link
            to="/"
            className="px-4 py-2 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition"
          >
            ← Shop More
          </Link>
        </div>

        {/* Cart Items */}
        <div className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow p-4 flex flex-col sm:flex-row items-center gap-4"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-20 h-20 object-contain"
              />

              {/* Info */}
              <div className="flex-1">
                <h3 className="text-gray-800 font-semibold text-sm line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-yellow-600 font-bold mt-1">
                  ${item.price.toFixed(2)} each
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="w-8 h-8 bg-gray-200 rounded-full font-bold text-lg hover:bg-gray-300 transition"
                >
                  −
                </button>
                <span className="w-8 text-center font-bold text-gray-800">
                  {item.quantity}
                </span>
                <button
                  onClick={() => increaseQty(item.id)}
                  className="w-8 h-8 bg-gray-200 rounded-full font-bold text-lg hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              {/* Item Total */}
              <div className="text-right min-w-[80px]">
                <p className="text-gray-800 font-bold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-2 bg-red-500 text-white rounded-lg text-sm font-bold hover:bg-red-600 transition"
              >
                🗑️ Remove
              </button>
            </div>
          ))}
        </div>

        {/* Price Summary */}
        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-green-600 font-semibold">
              <span>Discount (10%)</span>
              <span>− ${discount.toFixed(2)}</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-xl font-bold text-gray-800">
              <span>Total</span>
              <span className="text-yellow-600">${finalPrice.toFixed(2)}</span>
            </div>
          </div>
          <button className="mt-4 w-full py-3 bg-yellow-400 text-black font-bold rounded-lg hover:bg-yellow-500 transition text-lg">
            ✅ Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;