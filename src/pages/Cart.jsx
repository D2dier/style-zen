// src/pages/Cart.jsx
import React from "react";
import "../styles/Cart.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, Link } from 'react-router-dom';

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useCart } from '../context/CartContext'; //  Use custom hook

export default function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart } = useCart(); //  Updated

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const calculateSubtotal = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  };

  return (
    <>
      <Navbar/>
      <main>
        <section className="cart-section">
          <div className="container">
            <h1 className="cart-title">Your Shopping Cart</h1>

            <div className="cart-content">
              <table className="cart-items">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length === 0 ? (
                    <tr>
                      <td colSpan="5" style={{ textAlign: 'center' }}>Your cart is empty.</td>
                    </tr>
                  ) : (
                    cart.map((item) => (
                      <tr key={item.id || item.title}>
                        <td data-label="Product">
                          <div className="cart-item">
                            <img src={item.image} alt={item.title} className="cart-item-img" />
                            <div className="cart-item-info">
                              <h3>{item.title}</h3>
                            </div>
                          </div>
                        </td>
                        <td data-label="Price">${item.price.toFixed(2)}</td>
                        <td data-label="Quantity">{item.quantity}</td>
                        <td data-label="Total">${(item.price * item.quantity).toFixed(2)}</td>
                        <td>
                          <button className="remove-item" onClick={() => removeFromCart(item.title)}>Remove</button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>

              <div className="cart-summary">
                <h3>Cart Summary</h3>
                <div className="summary-row">
                  <span>Subtotal</span>
                  <span>${calculateSubtotal()}</span>
                </div>

                <div className="summary-row">
                  <span>Tax (7%)</span>
                  <span>${(calculateSubtotal() * 0.07).toFixed(2)}</span>
                </div>

                <div className="summary-row summary-total">
                  <span>Total</span>
                  <span>${(calculateSubtotal() * 1.07).toFixed(2)}</span>
                </div>

                <button className="btn" onClick={handleCheckout}>Proceed to Checkout</button>
              </div>

              <div className="cart-actions">
                <Link to="/shop" className="continue-shopping">
                  <i className="fas fa-arrow-left"></i> Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </>
  );
}
