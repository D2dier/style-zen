// src/pages/Cart.jsx
import React from "react";
import "../styles/Cart.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useNavigate, Link } from 'react-router-dom';

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
      <header>
        <div className="container">
          <nav>
            <Link to="/" className="logo">StyleZen</Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/shop">Shop</Link>
              <Link to="/cart" className="active">Cart</Link>
            </div>
          </nav>
        </div>
      </header>

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

      <footer>
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>About StyleZen</h3>
              <p>Minimalist clothing designed for comfort and sustainability.</p>
              <div className="social-links">
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-pinterest-p"></i></a>
              </div>
            </div>
            <div className="footer-column">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Customer Service</h3>
              <ul>
                <li><a href="#">Shipping Policy</a></li>
                <li><a href="#">Returns & Exchanges</a></li>
                <li><a href="#">Size Guide</a></li>
                <li><a href="#">FAQs</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>Contact Us</h3>
              <ul>
                <li><i className="fas fa-envelope"></i> hello@stylezen.com</li>
                <li><i className="fas fa-phone"></i> (123) 456-7890</li>
                <li><i className="fas fa-map-marker-alt"></i> 123 Zen Street, CA</li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2025 StyleZen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
